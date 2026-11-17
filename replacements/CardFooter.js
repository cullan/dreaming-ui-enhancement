Aue = (i) => {
  const {
    video: t,
    className: r,
    showLevel: a = !0,
    hideLevelLabel: l = !1,
    premiumVariant: c = 'secondary',
    hidePremiumLabel: h = !1,
    adultSize: d = 'sm'
  }
    = i;
  return m.jsxs(
    'div',
    {
      className: r,
      children: [
        a &&
          m.jsx(RB, {
            level: t.level,
            hideLabel: l
          }),
        reactExports.createElement(VideoDifficultyBadge, { difficultyScore: t.difficultyScore }),
        t.private &&
          m.jsx(
            Zc,
            {
              variant: c,
              size: 'sm',
              startIcon: 'thick-star',
              'data-testid': 'video-premium-badge',
              children: m.jsx(
                'span',
                {
                  className: h ? 'visually-hidden' : void 0,
                  children: 'Premium'
                }
              )
            }
          ),
        xse(t) &&
          m.jsx(Zc, {
            variant: 'error-alternative',
            size: d,
            children: '18+'
          })
      ]
    }
  )
}
