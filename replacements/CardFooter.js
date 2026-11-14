function CardFooter(r) {
  const {
    video: n,
    className: i,
    showLevel: a = !0,
    hideLevelLabel: l = !1,
    premiumVariant: c = 'secondary',
    hidePremiumLabel: p = !1,
    adultSize: d = 'sm'
  }
    = r;
  return h.createElement(
    'div',
    {
      className: i
    },
    a &&
      h.createElement(wB, {
        level: n.level,
        hideLabel: l
      }),
    reactExports.createElement(VideoDifficultyBadge, { difficultyScore: n.difficultyScore }),
    n.private &&
      h.createElement(
        Jc,
        {
          variant: c,
          size: 'sm',
          startIcon: 'thick-star',
          'data-testid': 'video-premium-badge'
        },
        h.createElement('span', {
          className: p ? 'sr-only' : void 0
        }, 'Premium')
      ),
    Fre(n) &&
      h.createElement(Jc, {
        variant: 'error-alternative',
        size: d
      }, '18+')
  )
}

roe = CardFooter;
