_qe = (r) => {
  const {
    series: n,
    seriesDataItems: i
  }
    = r,
      {
        language: a
      }
        = Nr(),
      [
        l,
        c
      ] = h.useState(0),
      p = h.useMemo(() => n.length, [
        n.length
      ]),
      d = h.useRef(null),
      g = h.useRef(null);
  return h.useEffect(
    () => {
      d.current?.querySelectorAll('.slick-slide').forEach(y => {
        y.inert = y.dataset.index !== String(l)
      })
    },
    [
      l,
      n
    ]
  ),
      h.createElement(
        'section',
        {
          className: 'ds-series-carousel',
          ref: d,
          'aria-roledescription': 'carousel',
          'aria-label': 'Featured series'
        },
        p > 1 &&
          h.createElement(
            h.Fragment,
            null,
            h.createElement(
              jn,
              {
                iconOnly: !0,
                shape: 'circle',
                appearance: 'text',
                size: 'lg',
                className: 'ds-series-carousel__arrow ds-series-carousel__arrow--prev',
                'aria-label': 'Previous series',
                onClick: () => g.current?.slickPrev()
              },
              h.createElement(un, {
                icon: 'thick-arrow-back'
              })
            ),
            h.createElement(
              jn,
              {
                iconOnly: !0,
                shape: 'circle',
                appearance: 'text',
                size: 'lg',
                className: 'ds-series-carousel__arrow ds-series-carousel__arrow--next',
                'aria-label': 'Next series',
                onClick: () => g.current?.slickNext()
              },
              h.createElement(un, {
                icon: 'thick-arrow-next'
              })
            )
          ),
        h.createElement(
          'span',
          {
            role: 'status',
            className: 'sr-only'
          },
          l < p ? `${ n[l].title }, ${ l + 1 } of ${ p }` : ''
        ),
        h.createElement(
          Eqe,
          {
            ref: g,
            className: 'ds-series-carousel__carousel',
            ...bqe,
            beforeChange: (y, b) => {
              c(b)
            }
          },
          n.map(
            (y, b) => {
              const S = i[y._id],
              T = kqe(b, l, p);
              return h.createElement(
                Vy.Item,
                {
                  key: y._id,
                  className: 'ds-series-carousel__slide',
                  role: 'group',
                  'aria-roledescription': 'slide',
                  'aria-label': `${ b + 1 } of ${ p }`
                },
                h.createElement(
                  w7,
                  {
                    type: T ? 'standard' : 'lazy',
                    series: y,
                    kind: 'cover',
                    alt: '',
                    className: 'ds-series-carousel__cover',
                    loading: T ? 'eager' : 'lazy'
                  }
                ),
                h.createElement('div', {
                  className: 'ds-series-carousel__overlay'
                }),
                h.createElement(
                  Vy.Caption,
                  {
                    className: 'ds-series-carousel__caption'
                  },
                  h.createElement('h2', {
                    className: 'ds-series-carousel__title'
                  }, y.title),
                  h.createElement(
                    'div',
                    {
                      className: 'ds-series-carousel__information'
                    },
                    h.createElement(wB, {
                      level: y.level
                    }),
                    reactExports.createElement(SeriesDifficultyBadge, { episodes: S.episodes }),
                    h.createElement(
                      'div',
                      {
                        className: 'ds-series-carousel__information-duration'
                      },
                      h.createElement(
                        un,
                        {
                          className: 'ds-series-carousel__information-duration-icon',
                          icon: 'thick-time'
                        }
                      ),
                      S &&
                        h.createElement(
                          'p',
                          {
                            className: 'ds-series-carousel__information-duration-label'
                          },
                          S.episodes.length,
                          ' Episode(s) • ',
                          uT(S.duration)
                        )
                    )
                  ),
                  h.createElement(
                    'p',
                    {
                      className: 'ds-series-carousel__description'
                    },
                    y.description
                  ),
                  h.createElement(
                    'div',
                    {
                      className: 'ds-series-carousel__buttons'
                    },
                    h.createElement(
                      jn,
                      {
                        to: sr({
                          path: Fo,
                          language: a,
                          params: {
                            series: y._id
                          }
                        }),
                        size: 'lg',
                        startIcon: h.createElement(un, {
                          icon: 'thick-play'
                        })
                      },
                      'Play'
                    ),
                    h.createElement(
                      jn,
                      {
                        to: sr({
                          path: Cv,
                          language: a,
                          params: {
                            id: y._id
                          }
                        }),
                        size: 'lg',
                        appearance: 'tonal'
                      },
                      'More info'
                    )
                  )
                )
              )
            }
          )
        )
      )
}
