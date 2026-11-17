ZHe = (i) => {
  const {
    series: t,
    seriesDataItems: r
  }
    = i,
    {
      language: a
    }
      = Mr(),
    [
      l,
      c
    ] = O.useState(0),
    h = O.useMemo(() => t.length, [
      t.length
    ]),
    d = O.useRef(null),
    g = O.useRef(null);
  return O.useEffect(
    () => {
      d.current?.querySelectorAll('.slick-slide').forEach(y => {
        y.inert = y.dataset.index !== String(l)
      })
    },
    [
      l,
      t
    ]
  ),
      m.jsxs(
        'section',
        {
          className: 'ds-series-carousel',
          ref: d,
          'aria-roledescription': 'carousel',
          'aria-label': 'Featured series',
          children: [
            h > 1 &&
              m.jsxs(
                m.Fragment,
                {
                  children: [
                    m.jsx(
                      Dn,
                      {
                        iconOnly: !0,
                        shape: 'circle',
                        appearance: 'text',
                        size: 'lg',
                        className: 'ds-series-carousel__arrow ds-series-carousel__arrow--prev',
                        'aria-label': 'Previous series',
                        onClick: () => g.current?.slickPrev(),
                        children: m.jsx(nn, {
                          icon: 'thick-arrow-back'
                        })
                      }
                    ),
                    m.jsx(
                      Dn,
                      {
                        iconOnly: !0,
                        shape: 'circle',
                        appearance: 'text',
                        size: 'lg',
                        className: 'ds-series-carousel__arrow ds-series-carousel__arrow--next',
                        'aria-label': 'Next series',
                        onClick: () => g.current?.slickNext(),
                        children: m.jsx(nn, {
                          icon: 'thick-arrow-next'
                        })
                      }
                    )
                  ]
                }
              ),
            m.jsx(
              'span',
              {
                role: 'status',
                className: 'visually-hidden',
                children: l < h ? `${ t[l].title }, ${ l + 1 } of ${ h }` : ''
              }
            ),
            m.jsx(
              KHe,
              {
                ref: g,
                className: 'ds-series-carousel__carousel',
                ...YHe,
                beforeChange: (y, b) => {
                  c(b)
                },
                children: t.map(
                  (y, b) => {
                    const S = r[y._id],
                      T = XHe(b, l, h);
                    return m.jsxs(
                      'div',
                      {
                        className: 'ds-series-carousel__slide',
                        role: 'group',
                        'aria-roledescription': 'slide',
                        'aria-label': `${ b + 1 } of ${ h }`,
                        children: [
                          m.jsx(
                            sw,
                            {
                              type: T ? 'standard' : 'lazy',
                              series: y,
                              kind: 'cover',
                              alt: '',
                              className: 'ds-series-carousel__cover',
                              loading: T ? 'eager' : 'lazy'
                            }
                          ),
                          m.jsx('div', {
                            className: 'ds-series-carousel__overlay'
                          }),
                          m.jsxs(
                            'div',
                            {
                              className: 'ds-series-carousel__caption',
                              children: [
                                m.jsx(
                                  'h2',
                                  {
                                    className: 'ds-series-carousel__title',
                                    children: y.title
                                  }
                                ),
                                m.jsxs(
                                  'div',
                                  {
                                    className: 'ds-series-carousel__information',
                                    children: [
                                      m.jsx(RB, {
                                        level: y.level
                                      }),
                                      reactExports.createElement(SeriesDifficultyBadge, { episodes: S.episodes }),
                                      m.jsxs(
                                        'div',
                                        {
                                          className: 'ds-series-carousel__information-duration',
                                          children: [
                                            m.jsx(
                                              nn,
                                              {
                                                className: 'ds-series-carousel__information-duration-icon',
                                                icon: 'thick-time'
                                              }
                                            ),
                                            S &&
                                              m.jsxs(
                                                'p',
                                                {
                                                  className: 'ds-series-carousel__information-duration-label',
                                                  children: [
                                                    S.episodes.length,
                                                    ' Episode(s) • ',
                                                    eA(S.duration)
                                                  ]
                                                }
                                              )
                                          ]
                                        }
                                      )
                                    ]
                                  }
                                ),
                                m.jsx(
                                  'p',
                                  {
                                    className: 'ds-series-carousel__description',
                                    children: y.description
                                  }
                                ),
                                m.jsxs(
                                  'div',
                                  {
                                    className: 'ds-series-carousel__buttons',
                                    children: [
                                      m.jsx(
                                        Dn,
                                        {
                                          to: yr({
                                            path: Yu,
                                            language: a,
                                            params: {
                                              series: y._id
                                            }
                                          }),
                                          size: 'lg',
                                          startIcon: m.jsx(nn, {
                                            icon: 'thick-play'
                                          }),
                                          children: 'Play'
                                        }
                                      ),
                                      m.jsx(
                                        Dn,
                                        {
                                          to: yr({
                                            path: Yv,
                                            language: a,
                                            params: {
                                              id: y._id
                                            }
                                          }),
                                          size: 'lg',
                                          appearance: 'tonal',
                                          children: 'More info'
                                        }
                                      )
                                    ]
                                  }
                                )
                              ]
                            }
                          )
                        ]
                      },
                      y._id
                    )
                  }
                )
              }
            )
          ]
        }
      )
}
