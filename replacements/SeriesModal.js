ow = (i) => {
  const {
    show: t,
    series: r,
    seriesDataItem: a,
    closeCallback: l
  }
    = i,
    {
      getColor: c
    }
      = E4(),
    h = c({
      light: 1,
      dark: 100
    }),
    {
      language: d,
      languageName: g
    }
      = Mr(),
    {
      walled: y
    }
      = mp(),
    {
      withAccount: b
    }
      = Gx(),
    S = pp(ud('sm'));
  sB(t && S);
  const T = Gi(),
    D = oA({
      language: d
    }),
    N = fd({
      language: d
    }),
    F = hse(),
    B = pse({
      language: d
    }),
    [
      V,
      H
    ] = O.useState(!1),
    [
      Z,
      re
    ] = O.useState(!1),
    U = O.useCallback(
      Ne => {
        F.mutate({
          seriesId: Ne._id,
          addedDate: new Date,
          language: d
        }),
          ri.next({
            type: 'success',
            content: 'Added to my list.'
          })
      },
      [
        F,
        d
      ]
    ),
    G = O.useCallback(
      Ne => {
        B.mutate(Ne),
          ri.next({
            type: 'error',
            content: 'Removed from my list.'
          })
      },
      [
        B
      ]
    );
  O.useEffect(() => {
    t ? H(!0) : (H(!1), re(!1))
  }, [
    t
  ]),
      O.useEffect(
        () => {
          if (Z) {
            const Ne = setTimeout(() => l(), 200);
            return () => clearTimeout(Ne)
          }
        },
        [
          Z,
          l
        ]
      );
  const A = D.data?.find(Ne => Ne.seriesId === r._id),
    ne = !A,
    fe = !!A;
  let oe = 0,
    X = 0;
  const ce = a.episodes.slice();
  let ue = 0;
  ce.forEach(
    Ne => {
      if (oe += P0(Ne), !N.data) return;
      const Se = N.data[Ne._id];
      Se &&
        (X += Se.watched ? P0(Ne) : Se.watchPosition)
    }
  );
  const me = ce.length;
  r.numberOfEpisodes > me &&
    (ue = r.numberOfEpisodes - me);
  const he = Ux(100, X / oe * 100, !0),
    _e = m.jsxs(
      m.Fragment,
      {
        children: [
          m.jsx(
            sw,
            {
              type: 'lazy',
              series: r,
              kind: 'cover',
              alt: r.title,
              className: 'ds-series-modal__cover'
            }
          ),
          m.jsx('div', {
            className: 'ds-series-modal__overlay'
          }),
          m.jsxs(
            'div',
            {
              className: 'ds-series-modal__caption',
              children: [
                m.jsx(
                  Qs,
                  {
                    as: 'h1',
                    className: 'ds-series-modal__title',
                    children: r.title
                  }
                ),
                m.jsxs(
                  'div',
                  {
                    className: 'ds-series-modal__information',
                    children: [
                      m.jsx(RB, {
                        level: r.level
                      }),
                      reactExports.createElement(SeriesDifficultyBadge, { episodes: a.episodes }),
                      m.jsx(
                        nn,
                        {
                          className: 'ds-series-modal__information-icon',
                          icon: 'thick-time'
                        }
                      ),
                      m.jsxs(
                        'p',
                        {
                          className: 'ds-series-modal__information-label',
                          children: [
                            ce.length,
                            ' Episode(s) • ',
                            eA(a.duration)
                          ]
                        }
                      )
                    ]
                  }
                ),
                m.jsxs(
                  'div',
                  {
                    className: 'ds-series-modal__doughnut',
                    children: [
                      m.jsxs(
                        'p',
                        {
                          className: 'ds-series-modal__doughnut-progress',
                          children: [
                            he,
                            '%',
                            m.jsx(
                              'small',
                              {
                                className: 'ds-series-modal__doughnut-label',
                                children: 'watched'
                              }
                            )
                          ]
                        }
                      ),
                      m.jsx(PL, {
                        progress: he,
                        backgroundColor: _F(h, 0.2),
                        progressColor: h
                      })
                    ]
                  }
                ),
                m.jsxs(
                  'div',
                  {
                    className: 'ds-series-modal__buttons',
                    children: [
                      m.jsx(
                        Dn,
                        {
                          to: yr({
                            path: Yu,
                            language: d,
                            params: {
                              series: r._id
                            }
                          }),
                          size: 'lg',
                          startIcon: m.jsx(nn, {
                            icon: 'thick-play'
                          }),
                          children: 'Play'
                        }
                      ),
                      ne &&
                        m.jsx(
                          Dn,
                          {
                            size: 'lg',
                            variant: 'neutral',
                            appearance: 'outline',
                            startIcon: m.jsx(nn, {
                              icon: 'thick-add-playlist',
                              style: {
                                color: T_e
                              }
                            }),
                            onClick: b(() => U(r), 'Create a free account to add series to your list.'),
                            children: 'Add to my list'
                          }
                        ),
                      fe &&
                        m.jsx(
                          Dn,
                          {
                            size: 'lg',
                            variant: 'neutral',
                            appearance: 'outline',
                            startIcon: m.jsx(nn, {
                              icon: 'thick-remove-playlist',
                              style: {
                                color: S_e
                              }
                            }),
                            onClick: () => G(A),
                            children: 'Remove from my list'
                          }
                        )
                    ]
                  }
                )
              ]
            }
          )
        ]
      }
    ),
    W = m.jsxs(
      m.Fragment,
      {
        children: [
          m.jsxs(
            'div',
            {
              className: 'ds-series-modal__progress',
              children: [
                m.jsxs(
                  'p',
                  {
                    className: 'ds-series-modal__progress-label',
                    children: [
                      he,
                      '% watched'
                    ]
                  }
                ),
                m.jsx(
                  Jv,
                  {
                    className: 'ds-series-modal__progress-bar',
                    value: he,
                    'aria-hidden': !0
                  }
                )
              ]
            }
          ),
          m.jsx(
            'p',
            {
              className: 'ds-series-modal__description',
              children: r.description
            }
          ),
          m.jsxs(
            'div',
            {
              className: 'ds-series-modal__grid',
              children: [
                ce.map(
                  Ne => !T.data ||
                    !N.data ||
                    !D.data ? m.jsx('div', {
                  }, Ne._id) : m.jsx(
                    'div',
                    {
                      className: 'ds-series-modal__video',
                      children: m.jsx(
                        rw,
                        {
                          video: Ne,
                          userState: T.data,
                          watchedVideos: N.data,
                          playlistItems: D.data,
                          variant: 'episode',
                          showDifficulty: !1,
                          title: m.jsxs(m.Fragment, {
                            children: [
                              'E',
                              Ne.episodeNumber,
                              ': ',
                              Ne.title
                            ]
                          }),
                          description: Ne.description ?? '',
                          showLevelBadge: !1,
                          to: sg(Ne, {
                            walled: y,
                            language: Ne.language ?? aa,
                            params: {
                              series: r._id
                            }
                          })
                        }
                      )
                    },
                    Ne._id
                  )
                ),
                as.times(ue).map(
                  Ne => m.jsx(
                    'div',
                    {
                      className: 'ds-series-modal__video',
                      children: m.jsx(A$e, {
                        episodeNumber: Ne + 1 + ce.length,
                        series: r
                      })
                    },
                    Ne
                  )
                )
              ]
            }
          )
        ]
      }
    );
  return m.jsxs(
    m.Fragment,
    {
      children: [
        t &&
          m.jsx(
            Zu,
            {
              title: r.title,
              description: r.description,
              ogUrl: `https://app.dreaming.com/${ g.toLowerCase() }/series?id=${ r._id }`,
              ogTitle: r.title,
              ogDescription: r.description,
              ogImage: Zue(r._id, 'horizontal'),
              ogSiteName: 'Dreaming: Language Learning',
              ogType: 'website',
              canonical: `https://app.dreaming.com/${ g.toLowerCase() }/series?id=${ r._id }`
            }
          ),
        m.jsxs(
          fa,
          {
            open: t &&
              !S,
            onClose: l,
            size: 'xl',
            closeOnColor: !0,
            className: 'ds-series-modal',
            'data-testid': 'series-modal',
            children: [
              m.jsx('div', {
                className: 'ds-series-modal__hero',
                children: _e
              }),
              m.jsx(ha, {
                className: 'ds-series-modal__modal-body',
                children: W
              })
            ]
          }
        ),
        t &&
          S &&
          m.jsxs(
            'div',
            {
              className: `ds-series-modal ds-series-modal--mobile ds-animation
            
                ${ V ? ' ds-fade-in-right' : '' }
            
                ${ Z ? ' ds-fade-out-right' : '' }
          
                `,
              role: 'dialog',
              'data-testid': 'series-modal',
              children: [
                m.jsxs(
                  'div',
                  {
                    className: 'ds-series-modal__header',
                    children: [
                      _e,
                      m.jsx(
                        Dn,
                        {
                          iconOnly: !0,
                          'aria-label': 'Close modal',
                          variant: 'neutral',
                          appearance: 'tonal',
                          shape: 'circle',
                          size: 'xs',
                          className: 'ds-series-modal__close-button',
                          onClick: () => re(!0),
                          children: m.jsx(nn, {
                            icon: 'line-close'
                          })
                        }
                      )
                    ]
                  }
                ),
                m.jsx('div', {
                  className: 'ds-series-modal__body',
                  children: W
                })
              ]
            }
          )
      ]
    }
  )
}
