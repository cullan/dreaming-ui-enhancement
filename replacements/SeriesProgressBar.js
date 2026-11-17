function SeriesProgressBar({ episodes, card }) {
  const { language: language } = useLanguage();
  const watchedVideos = useGetAllWatchedVideos({ language });

  return reactExports.createElement(
    'div',
    {
      style: {
        'display': 'grid',
        'height': '100%',
        'width': '100%',
        'grid-template-rows': '1fr'
      }
    },
    card,
    reactExports.createElement(
      'div',
      {
        className: 'ds-series-continue-watching__episode-progress',
        style: { 'margin-top': '5px', 'height': '10px' }
      },
      episodes.map(
        (episode, i) => {
          const w = watchedVideos.data[episode._id],
            progress = percentage(episode.duration - (episode.endCutout ?? 0), w?.watchPosition ?? 0);
          return reactExports.createElement(
            ProgressBarPiece,
            {
              tone: 'success',
              className: 'ds-series-continue-watching__episode-bar',
              value: progress,
              'aria-label': `Episode ${ i + 1 }`
            },
            episode._id
          )
        }
      )
    )
  );
}
