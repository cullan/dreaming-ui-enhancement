k7 = (r) => {
  const {
    series: n,
    seriesDataItem: i,
    kind: a = 'vertical',
    eager: l = !1,
    fill: c = !1,
    testId: p = 'series-card',
    label: d = n.title,
    to: g,
    onClick: y,
    children: b
  }
    = r,
      seriesDataItem = i,
      [
        S,
        T
      ] = h.useState(!1),
      D = i?.locked,
      P = h.createElement('span', {
        className: 'sr-only'
      }, D ? `${ d } (premium)` : d);
  return h.createElement(
    'div',
    {
      className: Ar(Wp.card, c && Wp.fill),
      'data-testid': p
    },
    h.createElement(
      w7,
      {
        type: l ? 'standard' : 'lazy',
        loading: l ? 'eager' : 'lazy',
        series: n,
        kind: a,
        alt: '',
        className: Wp.image,
        onLoad: () => T(!1),
        onError: () => T(!0)
      }
    ),
    reactExports.createElement(SeriesDifficultyBadgeOverlay, { episodes: seriesDataItem.episodes }),
    h.createElement(
      'div',
      {
        className: Ar(Wp.overlay, D && Wp.overlayLocked)
      },
      D &&
        !S &&
        h.createElement(un, {
          className: Wp.premiumIcon,
          icon: 'thick-lock'
        })
    ),
    S ? h.createElement(
      'div',
      {
        className: Wp.title,
        'aria-hidden': 'true'
      },
      D &&
        h.createElement(un, {
          className: Wp.premiumIcon,
          icon: 'thick-lock'
        }),
      n.title
    ) : b,
    g === void 0 ? h.createElement('button', {
      type: 'button',
      className: Wp.action,
      onClick: y
    }, P) : h.createElement(Oa, {
      to: g,
      className: Wp.action
    }, P)
  )
}
