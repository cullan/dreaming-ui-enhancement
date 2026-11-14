_7 = (r) => {
  const {
    show: n,
    series: i,
    seriesDataItem: a,
    closeCallback: l
  }
    = r,
      {
        getColor: c
      }
        = jv(),
      p = c({
        light: 1,
        dark: 100
      }),
      {
        language: d,
        languageName: g
      }
        = Nr(),
      {
        walled: y
      }
        = sp(),
      {
        withAccount: b
      }
        = m8(),
      S = ip(al('sm'));
  ZF(n && S);
  const T = Gi(),
      D = gT({
        language: d
      }),
      P = F0({
        language: d
      }),
      j = Dre(),
      Y = Nre({
        language: d
      }),
      [
        G,
        K
      ] = h.useState(!1),
      [
        z,
        ee
      ] = h.useState(!1),
      F = h.useCallback(
        De => {
          j.mutate({
            seriesId: De._id,
            addedDate: new Date,
            language: d
          }),
          li.next({
            type: 'success',
            content: 'Added to my list.'
          })
        },
        [
          j,
          d
        ]
      ),
      $ = h.useCallback(
        De => {
          Y.mutate(De),
          li.next({
            type: 'error',
            content: 'Removed from my list.'
          })
        },
        [
          Y
        ]
      );
  h.useEffect(() => {
    n ? K(!0) : (K(!1), ee(!1))
  }, [
    n
  ]),
      h.useEffect(
        () => {
          if (z) {
            const De = setTimeout(() => l(), 200);
            return () => clearTimeout(De)
          }
        },
        [
          z,
          l
        ]
      );
  const C = D.data?.find(De => De.seriesId === i._id),
      ne = !C,
      fe = !!C;
  let re = 0,
      q = 0;
  const ce = a.episodes.slice();
  let ue = 0;
  ce.forEach(
    De => {
      if (re += De.duration - (De.endCutout ?? 0), !P.data) return;
      const ke = P.data[De._id];
      ke &&
        (q += ke.watched ? De.duration - (De.endCutout ?? 0) : ke.watchPosition)
    }
  );
  const me = ce.length;
  i.numberOfEpisodes > me &&
    (ue = i.numberOfEpisodes - me);
  const de = f8(100, q / re * 100, !0),
      Te = h.createElement(
        h.Fragment,
        null,
        h.createElement(
          w7,
          {
            type: 'lazy',
            series: i,
            kind: 'cover',
            alt: i.title,
            className: 'ds-series-modal__cover'
          }
        ),
        h.createElement('div', {
          className: 'ds-series-modal__overlay'
        }),
        h.createElement(
          'div',
          {
            className: 'ds-series-modal__caption'
          },
          h.createElement(Js, {
            as: 'h1',
            className: 'ds-series-modal__title'
          }, i.title),
          h.createElement(
            'div',
            {
              className: 'ds-series-modal__information'
            },
            h.createElement(wB, {
              level: i.level
            }),
            reactExports.createElement(SeriesDifficultyBadge, { episodes: a.episodes }),
            h.createElement(
              un,
              {
                className: 'ds-series-modal__information-icon',
                icon: 'thick-time'
              }
            ),
            h.createElement(
              'p',
              {
                className: 'ds-series-modal__information-label'
              },
              ce.length,
              ' Episode(s) • ',
              uT(a.duration)
            )
          ),
          h.createElement(
            'div',
            {
              className: 'ds-series-modal__doughnut'
            },
            h.createElement(
              'p',
              {
                className: 'ds-series-modal__doughnut-progress'
              },
              de,
              '%',
              h.createElement(
                'small',
                {
                  className: 'ds-series-modal__doughnut-label'
                },
                'watched'
              )
            ),
            h.createElement(OR, {
              progress: de,
              backgroundColor: vF(p, 0.2),
              progressColor: p
            })
          ),
          h.createElement(
            'div',
            {
              className: 'ds-series-modal__buttons'
            },
            h.createElement(
              jn,
              {
                to: sr({
                  path: Fo,
                  language: d,
                  params: {
                    series: i._id
                  }
                }),
                size: 'lg',
                startIcon: h.createElement(un, {
                  icon: 'thick-play'
                })
              },
              'Play'
            ),
            ne &&
              h.createElement(
                jn,
                {
                  size: 'lg',
                  variant: 'neutral',
                  appearance: 'outline',
                  startIcon: h.createElement(un, {
                    icon: 'thick-add-playlist',
                    style: {
                      color: w7e
                    }
                  }),
                  onClick: b(() => F(i), 'Create a free account to add series to your list.')
                },
                'Add to my list'
              ),
            fe &&
              h.createElement(
                jn,
                {
                  size: 'lg',
                  variant: 'neutral',
                  appearance: 'outline',
                  startIcon: h.createElement(un, {
                    icon: 'thick-remove-playlist',
                    style: {
                      color: b7e
                    }
                  }),
                  onClick: () => $(C)
                },
                'Remove from my list'
              )
          )
        )
      ),
      W = h.createElement(
        h.Fragment,
        null,
        h.createElement(
          'div',
          {
            className: 'ds-series-modal__progress'
          },
          h.createElement(
            'p',
            {
              className: 'ds-series-modal__progress-label'
            },
            de,
            '% watched'
          ),
          h.createElement(
            u1,
            {
              className: 'ds-progress-bar ds-progress-bar--secondary',
              now: de
            }
          )
        ),
        h.createElement('p', {
          className: 'ds-series-modal__description'
        }, i.description),
        h.createElement(
          'div',
          {
            className: 'ds-series-modal__grid'
          },
          ce.map(
            De => !T.data ||
              !P.data ||
              !D.data ? h.createElement('div', {
                key: De._id
              }) : h.createElement(
                'div',
                {
                  key: De._id,
                  className: 'ds-series-modal__video'
                },
                h.createElement(
                  $v,
                  {
                    video: De,
                    userState: T.data,
                    watchedVideos: P.data,
                    playlistItems: D.data,
                    variant: 'episode',
                    showDifficulty: !1,
                    title: h.createElement(h.Fragment, null, 'E', De.episodeNumber, ': ', De.title),
                    description: De.description ?? '',
                    showLevelBadge: !1,
                    to: kBe(i, De, c1(De, y))
                  }
                )
              )
          ),
          ns.times(ue).map(
            De => h.createElement(
              'div',
              {
                key: De,
                className: 'ds-series-modal__video'
              },
              h.createElement(wBe, {
                episodeNumber: De + 1 + ce.length,
                series: i
              })
            )
          )
        )
      );
  return h.createElement(
    h.Fragment,
    null,
    n &&
      h.createElement(
        zu,
        {
          title: i.title,
          description: i.description,
          ogUrl: `https://app.dreaming.com/${ g.toLowerCase() }/series?id=${ i._id }`,
          ogTitle: i.title,
          ogDescription: i.description,
          ogImage: Toe(i._id, 'horizontal'),
          ogSiteName: 'Dreaming: Language Learning',
          ogType: 'website',
          canonical: `https://app.dreaming.com/${ g.toLowerCase() }/series?id=${ i._id }`
        }
      ),
    h.createElement(
      ma,
      {
        open: n &&
          !S,
        onClose: l,
        size: 'xl',
        closeOnColor: !0,
        className: 'ds-series-modal',
        'data-testid': 'series-modal'
      },
      h.createElement('div', {
        className: 'ds-series-modal__hero'
      }, Te),
      h.createElement(ga, {
        className: 'ds-series-modal__modal-body'
      }, W)
    ),
    n &&
      S &&
      h.createElement(
        'div',
        {
          className: `ds-series-modal ds-series-modal--mobile ds-animation
            
            ${ G ? ' ds-fade-in-right' : '' }
            
            ${ z ? ' ds-fade-out-right' : '' }
          
            `,
          role: 'dialog',
          'data-testid': 'series-modal'
        },
        h.createElement(
          'div',
          {
            className: 'ds-series-modal__header'
          },
          Te,
          h.createElement(
            jn,
            {
              iconOnly: !0,
              'aria-label': 'Close modal',
              variant: 'neutral',
              appearance: 'tonal',
              shape: 'circle',
              size: 'xs',
              className: 'ds-series-modal__close-button',
              onClick: () => ee(!0)
            },
            h.createElement(un, {
              icon: 'line-close'
            })
          )
        ),
        h.createElement('div', {
          className: 'ds-series-modal__body'
        }, W)
      )
  )
}
