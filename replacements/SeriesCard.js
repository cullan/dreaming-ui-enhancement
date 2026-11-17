aw = (i) => {
  const {
    series: t,
    seriesDataItem: r,
    kind: a = 'vertical',
    eager: l = !1,
    fill: c = !1,
    testId: h = 'series-card',
    label: d = t.title,
    to: g,
    onClick: y,
    children: b
  }
    = i,
    seriesDataItem = r,
    [
      S,
      T
    ] = O.useState(!1),
    D = r?.locked,
    N = m.jsx(
      'span',
      {
        className: 'visually-hidden',
        children: D ? `${ d } (premium)` : d
      }
    );
  const card = m.jsxs(
    'div',
    {
      className: Yn(t1.card, c && t1.fill),
      'data-testid': h,
      'style': { 'position': 'relative' },
      children: [
        m.jsx(
          sw,
          {
            type: l ? 'standard' : 'lazy',
            loading: l ? 'eager' : 'lazy',
            series: t,
            kind: a,
            alt: '',
            className: t1.image,
            onLoad: () => T(!1),
            onError: () => T(!0)
          }
        ),
        reactExports.createElement(SeriesDifficultyBadgeOverlay, { episodes: seriesDataItem.episodes }),
        m.jsx(
          'div',
          {
            className: Yn(t1.overlay, D && t1.overlayLocked),
            children: D &&
              !S &&
              m.jsx(nn, {
                className: t1.premiumIcon,
                icon: 'thick-lock'
              })
          }
        ),
        S ? m.jsxs(
          'div',
          {
            className: t1.title,
            'aria-hidden': 'true',
            children: [
              D &&
                m.jsx(nn, {
                  className: t1.premiumIcon,
                  icon: 'thick-lock'
                }),
              t.title
            ]
          }
        ) : b,
        g === void 0 ? m.jsx(
          'button',
          {
            type: 'button',
            className: t1.action,
            onClick: y,
            children: N
          }
        ) : m.jsx(To, {
          to: g,
          className: t1.action,
          children: N
        })
      ]
    }
  );
  // don't put the progress bar under the continue watching cards
  // because they include their own progress bar
  return d.includes('Play')
    ? card
    : reactExports.createElement(
      SeriesProgressBar,
      {
        episodes: seriesDataItem.episodes,
        card
      }
    );
}
