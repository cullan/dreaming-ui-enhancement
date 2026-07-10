SeriesModal = (n) => {
  const {
    show: s,
    series: l,
    seriesDataItem: u,
    closeCallback: p
  }
    = n,
    {
      getColor: m
    }
      = useColorMode(),
    g = m({
      light: 0,
      dark: 100
    }),
    {
      language: y,
      languageName: x
    }
      = useLanguage(),
    E = useUserState(),
    S = useGetAllPlaylist({
      language: y
    }),
    T = useGetAllWatchedVideos({
      language: y
    }),
    k = useAddToPlaylist(),
    R = useDeleteFromPlaylist({
      language: y
    }),
    [
      P,
      M
    ] = reactExports.useState(!1),
    [
      B,
      I
    ] = reactExports.useState(!1),
    F = reactExports.useCallback(
      ne => {
        k.mutate({
          seriesId: ne._id,
          addedDate: new Date,
          language: y
        }),
        actionToast$.next({
          type: 'success',
          content: 'Added to my list.'
        })
      },
      [
        k,
        y
      ]
    ),
    N = reactExports.useCallback(
      ne => {
        R.mutate(ne),
        actionToast$.next({
          type: 'error',
          content: 'Removed from my list.'
        })
      },
      [
        R
      ]
    );
  reactExports.useEffect(() => {
    s ? M(!0) : (M(!1), I(!1))
  }, [
    s
  ]),
    reactExports.useEffect(
      () => {
        if (B) {
          const ne = setTimeout(() => p(), 200);
          return () => clearTimeout(ne)
        }
      },
      [
        B,
        p
      ]
    );
  const O = S.data?.find(ne => ne.seriesId === l._id),
    $ = !O,
    U = !!O;
  let G = 0,
    H = 0,
    j = u.episodes.slice(),
    Y = 0;
  j.forEach(
    ne => {
      if (G += ne.duration - (ne.endCutout ?? 0), !T.data) return;
      const V = T.data[ne._id];
      V &&
        (H += V.watched ? ne.duration - (ne.endCutout ?? 0) : V.watchPosition)
    }
  );
  const X = j.length;
  l.numberOfEpisodes > X &&
    (Y = l.numberOfEpisodes - X);
  const J = percentage(100, H / G * 100, !0),
    te = reactExports.createElement(
      reactExports.Fragment,
      null,
      reactExports.createElement(
        SeriesArtwork,
        {
          type: 'lazy',
          series: l,
          kind: 'cover',
          alt: l.title,
          className: 'ds-series-modal__cover'
        }
      ),
      reactExports.createElement('div', {
        className: 'ds-series-modal__overlay'
      }),
      reactExports.createElement(
        'div',
        {
          className: 'ds-series-modal__caption'
        },
        reactExports.createElement('h1', {
          className: 'ds-series-modal__title'
        }, l.title),
        reactExports.createElement(
          'div',
          {
            className: 'ds-series-modal__information'
          },
          reactExports.createElement(LevelBadge, {
            level: l.level
          }),
          reactExports.createElement(SeriesDifficultyBadge, { episodes: u.episodes }),
          reactExports.createElement(
            IconMoon,
            {
              className: 'ds-series-modal__information-icon',
              icon: 'thick-time'
            }
          ),
          reactExports.createElement(
            'p',
            {
              className: 'ds-series-modal__information-label'
            },
            j.length,
            ' Episode(s) • ',
            secondsToHM(u.duration)
          )
        ),
        reactExports.createElement(
          'div',
          {
            className: 'ds-series-modal__doughnut'
          },
          reactExports.createElement(
            'p',
            {
              className: 'ds-series-modal__doughnut-progress'
            },
            J,
            '%',
            reactExports.createElement(
              'small',
              {
                className: 'ds-series-modal__doughnut-label'
              },
              'watched'
            )
          ),
          reactExports.createElement(
            DoughnutChart,
            {
              progress: J,
              backgroundColor: alpha(g, 0.2),
              progressColor: g
            }
          )
        ),
        reactExports.createElement(
          'div',
          {
            className: 'ds-series-modal__buttons'
          },
          reactExports.createElement(
            Link,
            {
              to: getUrl({
                path: WATCH,
                language: y,
                params: {
                  series: l._id
                }
              }),
              className: 'btn ds-button ds-button--lg ds-button--primary'
            },
            reactExports.createElement(
              IconMoon,
              {
                className: 'ds-button__icon ds-button__icon--left',
                icon: 'thick-play'
              }
            ),
            'Play'
          ),
          $ &&
            reactExports.createElement(
              'button',
              {
                type: 'button',
                className: 'btn ds-button ds-button--lg ds-button--white',
                onClick: () => F(l)
              },
              reactExports.createElement(
                IconMoon,
                {
                  className: 'ds-button__icon ds-button__icon--left ds-button__icon--lg ds-button__icon--success',
                  icon: 'thick-add-playlist',
                  'aria-hidden': 'true'
                }
              ),
              'Add to my list'
            ),
          U &&
            reactExports.createElement(
              'button',
              {
                type: 'button',
                className: 'btn ds-button ds-button--lg ds-button--white',
                onClick: () => N(O)
              },
              reactExports.createElement(
                IconMoon,
                {
                  className: 'ds-button__icon ds-button__icon--left ds-button__icon--lg ds-button__icon--error',
                  icon: 'thick-remove-playlist'
                }
              ),
              'Remove from my list'
            )
        )
      )
    ),
    $t = reactExports.createElement(
      reactExports.Fragment,
      null,
      reactExports.createElement(
        'div',
        {
          className: 'ds-series-modal__progress'
        },
        reactExports.createElement(
          'p',
          {
            className: 'ds-series-modal__progress-label'
          },
          J,
          '% watched'
        ),
        reactExports.createElement(
          ProgressBar$1,
          {
            className: 'ds-progress-bar ds-progress-bar--secondary',
            now: J
          }
        )
      ),
      reactExports.createElement('p', {
        className: 'ds-series-modal__description'
      }, l.description),
      reactExports.createElement(
        'div',
        {
          className: 'ds-series-modal__grid'
        },
        j.map(
          ne => !E.data ||
            !T.data ||
            !S.data ? reactExports.createElement('div', {
              key: ne._id
          }) : reactExports.createElement(
            'div',
            {
              key: ne._id,
              className: 'ds-series-modal__video'
            },
            reactExports.createElement(
              Link,
              {
                to: buildLinkTo(l, ne)
              },
              reactExports.createElement(
                EpisodeCard,
                {
                  video: ne,
                  userState: E.data,
                  watchedVideos: T.data,
                  playlistItems: S.data,
                  showDifficulty: !1
                }
              )
            )
          )
        ),
        lodashExports.times(Y).map(
          ne => reactExports.createElement(
            'div',
            {
              key: ne,
              className: 'ds-series-modal__video'
            },
            reactExports.createElement(ComingSoonCard, {
              episodeNumber: ne + 1 + j.length,
              series: l
            })
          )
        )
      )
    );
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    s &&
      reactExports.createElement(
        PageMeta,
        {
          title: l.title,
          description: l.description,
          ogUrl: `https://app.dreaming.com/${ x.toLowerCase() }/series?id=${ l._id }`,
          ogTitle: l.title,
          ogDescription: l.description,
          ogImage: getSeriesArtworkUrl(l._id, 'horizontal'),
          ogSiteName: 'Dreaming: Language Learning',
          ogType: 'website',
          canonical: `https://app.dreaming.com/${ x.toLowerCase() }/series?id=${ l._id }`
        }
      ),
    reactExports.createElement(
      Modal,
      {
        className: 'ds-modal ds-series-modal',
        backdropClassName: 'ds-series-modal--backdrop',
        show: s,
        onHide: () => p()
      },
      reactExports.createElement(
        Modal.Header,
        {
          className: 'ds-modal__header'
        },
        te,
        reactExports.createElement(
          'button',
          {
            type: 'button',
            className: 'ds-modal__close-button',
            onClick: () => p(),
            'aria-label': 'Close modal'
          },
          reactExports.createElement(
            IconMoon,
            {
              className: 'ds-modal__close-icon',
              icon: 'line-close'
            }
          )
        )
      ),
      reactExports.createElement(Modal.Body, {
        className: 'ds-modal__body'
      }, $t)
    ),
    s &&
      reactExports.createElement(
        'div',
        {
          className: `ds-series-modal ds-series-modal--mobile ds-animation
            
          ${ P ? ' ds-fade-in-right' : '' }
            
          ${ B ? ' ds-fade-out-right' : '' }
          
          `,
          role: 'dialog',
          'data-testid': 'series-modal-mobile'
        },
        reactExports.createElement(
          'div',
          {
            className: 'ds-series-modal__header'
          },
          te,
          reactExports.createElement(
            'button',
            {
              type: 'button',
              className: 'ds-series-modal__close-button',
              onClick: () => I(!0),
              'aria-label': 'Close modal'
            },
            reactExports.createElement(
              IconMoon,
              {
                className: 'ds-series-modal__close',
                icon: 'line-close'
              }
            )
          )
        ),
        reactExports.createElement('div', {
          className: 'ds-series-modal__body'
        }, $t)
      )
  )
};
