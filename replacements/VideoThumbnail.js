Ble = (i) => {
  const {
    video: t,
    watchedVideos: r,
    isPointerInside: l = !1,
    isHovered: c = !1
  }
    = i,
    a = false, // showDifficulty
    h = Xs(),
    d = O.useRef(null),
    {
      walled: g
    }
      = mp(),
    [
      y,
      b
    ] = O.useState(!1),
    [
      S,
      T
    ] = O.useState(!1),
    [
      D,
      N
    ] = O.useState(!1),
    {
      data: F
    }
      = aLe({
        videoId: t._id,
        enabled: l
    });
  O.useEffect(() => {
    c ||
      N(!1)
  }, [
    c
  ]),
      O.useEffect(() => {
        T(!1),
        N(!1),
        d.current = null
      }, [
        t._id
      ]),
      O.useEffect(() => {
        T(!1),
        N(!1)
      }, [
        F
      ]);
  const B = bF(t._id),
    V = r[t._id],
    H = Ux(P0(t), V?.watchPosition);
  return m.jsxs(
    'div',
    {
      className: 'ds-video-thumbnail ds-animation ds-fade-in',
      children: [
        m.jsx(
          Fle,
          {
            type: 'standard',
            src: B,
            alt: '',
            className: 'ds-video-thumbnail__image'
          }
        ),
        c &&
          F &&
          !S &&
          m.jsx(
            'img',
            {
              src: F,
              alt: '',
              'data-testid': 'video-preview',
              'data-loaded': D,
              className: 'ds-video-thumbnail__preview',
              onLoad: () => N(!0),
              onError: () => {
                T(!0),
                  F &&
                    t._id !== d.current &&
                    (d.current = t._id, h.invalidateQueries(zie({
                      videoId: t._id
                    })))
              }
            }
          ),
        !t.hasAccess &&
          !g &&
          !D &&
          m.jsx(
            'div',
            {
              className: 'ds-video-thumbnail__premium-overlay',
              'data-testid': 'video-premium-lock',
              children: m.jsx(
                nn,
                {
                  className: 'ds-video-thumbnail__premium-icon',
                  icon: 'thick-lock'
                }
              )
            }
          ),
        a &&
          m.jsx(
            Zc,
            {
              variant: 'overlay',
              size: 'xs',
              className: 'ds-video-thumbnail__badge ds-video-thumbnail__badge--vocab-range',
              onMouseEnter: () => b(!0),
              onMouseLeave: () => b(!1),
              children: PR(t.difficultyScore)
            }
          ),
        m.jsx(
          'div',
          {
            className: `ds-video-thumbnail__vocab-tooltip
            
                ${ y ? ' ds-video-thumbnail__vocab-tooltip--visible' : '' }
          
                `,
            children: 'Relative difficulty score from 0 to 100.'
          }
        ),
        H > 0 &&
          m.jsx(
            Jv,
            {
              className: 'ds-video-thumbnail__progress-bar',
              value: H,
              'aria-label': 'Watch progress'
            }
          ),
        t.duration > 0 &&
          m.jsx(
            Zc,
            {
              variant: 'overlay',
              size: 'xs',
              className: 'ds-video-thumbnail__badge ds-video-thumbnail__badge--watched-duration',
              startIcon: V?.watched ? 'thick-checked' : void 0,
              children: `${ V?.watched ? 'Watched | ' : '' }${ GS(P0(t)) }`
            }
          )
      ]
    }
  )
}
