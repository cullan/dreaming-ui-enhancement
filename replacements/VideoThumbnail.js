_ae = (r) => {
  const {
    video: n,
    watchedVideos: i,
    isPointerInside: l = !1,
    isHovered: c = !1
  }
    = r,
      a = false, // showDifficulty
      p = ua(),
      d = h.useRef(null),
      {
        walled: g
      }
        = sp(),
      [
        y,
        b
      ] = h.useState(!1),
      [
        S,
        T
      ] = h.useState(!1),
      [
        D,
        P
      ] = h.useState(!1),
      {
        data: j
      }
        = YNe({
          videoId: n._id,
          enabled: l
        });
  h.useEffect(() => {
    c ||
      P(!1)
  }, [
    c
  ]),
      h.useEffect(() => {
        T(!1),
        P(!1),
        d.current = null
      }, [
        n._id
      ]),
      h.useEffect(() => {
        T(!1),
        P(!1)
      }, [
        j
      ]);
  const Y = `${ pne }/${ n._id }.jpg`,
      G = i[n._id],
      K = f8(n.duration - (n.endCutout ?? 0), G?.watchPosition);
  return h.createElement(
    'div',
    {
      className: 'ds-video-thumbnail ds-animation ds-fade-in'
    },
    h.createElement(
      kae,
      {
        type: 'standard',
        src: Y,
        alt: '',
        className: 'ds-video-thumbnail__image'
      }
    ),
    c &&
      j &&
      !S &&
      h.createElement(
        'img',
        {
          src: j,
          alt: '',
          'data-testid': 'video-preview',
          'data-loaded': D,
          className: 'ds-video-thumbnail__preview',
          onLoad: () => P(!0),
          onError: () => {
            T(!0),
              j &&
                n._id !== d.current &&
                (d.current = n._id, p.invalidateQueries(cre({
                  videoId: n._id
                })))
          }
        }
      ),
    !n.hasAccess &&
      !g &&
      !D &&
      h.createElement(
        'div',
        {
          className: 'ds-video-thumbnail__premium-overlay',
          'data-testid': 'video-premium-lock'
        },
        h.createElement(
          un,
          {
            className: 'ds-video-thumbnail__premium-icon',
            icon: 'thick-lock'
          }
        )
      ),
    a &&
      h.createElement(
        Jc,
        {
          variant: 'overlay',
          size: 'xs',
          className: 'ds-video-thumbnail__badge ds-video-thumbnail__badge--vocab-range',
          onMouseEnter: () => b(!0),
          onMouseLeave: () => b(!1)
        },
        LO(n.difficultyScore)
      ),
    h.createElement(
      'div',
      {
        className: `ds-video-thumbnail__vocab-tooltip
            
            ${ y ? ' ds-video-thumbnail__vocab-tooltip--visible' : '' }
          
            `
      },
      'Relative difficulty score from 0 to 100.'
    ),
    K > 0 &&
      h.createElement(
        u1,
        {
          className: 'ds-progress-bar ds-progress-bar--error ds-video-thumbnail__progress-bar',
          now: K
        }
      ),
    n.duration > 0 &&
      h.createElement(
        Jc,
        {
          variant: 'overlay',
          size: 'xs',
          className: 'ds-video-thumbnail__badge ds-video-thumbnail__badge--watched-duration',
          startIcon: G?.watched ? 'thick-checked' : void 0
        },
        `${ G?.watched ? 'Watched | ' : '' }${ vne(n.duration - (n.endCutout ?? 0)) }`
      )
  )
}
