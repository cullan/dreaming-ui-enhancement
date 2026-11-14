const indexReplacementFileNames = [
  // name aliases
  // when the site is updated the names are all scrambled.
  // it appears they are more obfuscated than before as well.
  // this file will map the bogus obfuscated names to better ones that are used in the other files.
  'replacements/aliases.js',
  // new functions
  'replacements/seriesDifficultyRange.js', // calculate difficulty range of a series
  // edited functions
  'replacements/processWatchedSeries.js', // determines which series show up in continue watching
  // new components
  'replacements/SeriesDifficultyBadgeOverlay.js', // difficulty range for a series in corner overlay
  'replacements/VideoDifficultyBadge.js', // difficulty badge for video cards
  'replacements/SeriesDifficultyBadge.js', // difficulty badge for series
  'replacements/SeriesProgressBar.js', // wrap a series component and display progress beneath it
  // edited components
  'replacements/CardFooter.js',
  'replacements/SeriesCard.js', // series cards on series pages (Series -> level)
  // 'replacements/SeriesCarousel.js', // large series carousel on top of series page
  // 'replacements/SeriesModal.js', // series detail page
  'replacements/VideoThumbnail.js', // video thumbnails with overlay
];

const watchPageReplacementFileNames = [
  'replacements/VideoSection.js', // playing a video
];

async function replacementSrc(fileNames) {
  const promises = fileNames.map(readFile);
  const contents = await Promise.all(promises);
  return contents.join("\n");
}

async function readFile(filename) {
  const fileURL = browser.runtime.getURL(filename)
  const response = await fetch(fileURL);
  const contents = await response.text();
  return contents;
}

function makeListener(replacementFileNames) {
  return (details) => {
    let filter = browser.webRequest.filterResponseData(details.requestId);
    let decoder = new TextDecoder("utf-8");
    let encoder = new TextEncoder();
    let script = "";

    filter.ondata = event => {
      let chunk = decoder.decode(event.data, {stream: true});
      script += chunk;
    }

    filter.onstop = async event => {
      const replacements = await replacementSrc(replacementFileNames);
      script += replacements;
      filter.write(encoder.encode(script));
      filter.close();
    };

    return {};
  };
}

browser.webRequest.onBeforeRequest.addListener(
  makeListener(indexReplacementFileNames),
  {urls: ["https://app.dreaming.com/assets/index-BbEUsQaR.js"], types: ["script"]},
  ["blocking"]
);

browser.webRequest.onBeforeRequest.addListener(
  makeListener(watchPageReplacementFileNames),
  {urls: ["https://app.dreaming.com/assets/WatchPage-BET-0Ucl.js"], types: ["script"]},
  ["blocking"]
);
