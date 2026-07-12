import { VideoDifficultyBadge } from './index-qlEw_rQr.js';

TU = (le) => {
  const {
    language: z,
    video: N,
    isFetchedVideo: ne,
    offlineVideo: _,
    manifest: ae,
    videoA: fe,
    videoB: m,
    autoplaySeconds: ie,
    autoplayCancelled: Q,
    series: O,
    nextVideos: $,
    displayType: b,
    source: K,
    playerReference: v,
    showPlayer: D,
    showPlayNext: W,
    showOverlay: L,
    showComments: H,
    showPremiumMessage: re,
    showBackgroundMessage: he,
    showPlaylist: Pe,
    onState: xe,
    onNextVideo: Se,
    onShowPlayer: Oe,
    onShowOverlay: Ke,
    onCancelPlayNext: A,
    onShowComments: ce,
    onShowPremiumMessage: ue,
    onShowBackgroundMessage: qe,
    onShowLoginModal: Te,
    onMarkVideoAsWatched: Ee,
    onMarkVideoAsUnwatched: Ge
  }
  = le,
  gt = oC(),
  cn = qR(),
  {
    browseState: pn
  }
  = Y.useContext(eL),
  En = Q_(),
  kt = jR(),
  {
    dispatch: $e
  }
  = Nx(),
  pt = Ox(),
  U = KR({
    language: z
  }),
  ht = Ux({
    language: z
  }),
  Rt = J_({
    language: z
  }),
  ze = tD({
    language: z
  }),
  [
    Gt,
    an
  ] = Y.useState(),
  [
    Gn,
    hn
  ] = Y.useState(!1),
  Re = Y.useMemo(
    () => {
      if (!(!ne || !N || !O) && N.seriesId && b !== 'series') return O.find(zn => zn._id === N.seriesId)
    },
    [
      ne,
      N,
      O,
      b
    ]
  );
  let Er = 'embed-responsive-16by9';
  (!N || N.aspectRatio === '2:1') &&
  (Er = 'embed-responsive-2by1');
  const Go = Y.useMemo(() => N?._id && `${ Z_ }/${ N._id }.jpg`, [
    N?._id
  ]);
  Y.useEffect(
    () => {
      if (!new URLSearchParams(window.location.search).get('comments')) return;
      const tt = new URLSearchParams(window.location.search),
      Fi = new URLSearchParams(window.location.search);
      Fi.delete('comments'),
      gt.replace({
        pathname: window.location.pathname,
        search: Fi.toString()
      }),
      gt.push({
        pathname: window.location.pathname,
        search: tt.toString()
      })
    },
    []
  ),
  Y.useEffect(
    () => {
      const zn = new URLSearchParams(cn.search).get('comments');
      !N ||
      !zn ||
      tL.next({
        show: !0,
        identifier: N._id,
        page: 'Watch',
        title: N.title,
        url: window.location.href
      })
    },
    [
      cn,
      N
    ]
  );
  const Je = 992,
  ms = 200;
  Y.useEffect(
    () => {
      let zn = window.innerWidth,
      tt;
      const Fi = (At, Ht) => At > Je &&
      Ht <= Je ||
      At <= Je &&
      Ht > Je;
      function Ho() {
        clearTimeout(tt),
        tt = setTimeout(
          () => {
            const At = window.innerWidth;
            Fi(zn, At) &&
            (ce(!1), an(void 0)),
            zn = At
          },
          ms
        )
      }
      return window.addEventListener('resize', Ho),
      window.addEventListener('orientationchange', Ho),
      () => {
        clearTimeout(tt),
        window.removeEventListener('resize', Ho),
        window.removeEventListener('orientationchange', Ho)
      }
    },
    [
      ce,
      an
    ]
  );
  const Br = N ? `${ window.location.origin }${ Vo({
    path: fh,
    language: z,
    params: {
      id: N._id
    }
  }) }` : '',
  oo = async() => {
    if (GR) try {
      await navigator.share({
        title: N?.title,
        url: Br
      })
    } catch {
    } else hn(!0)
  };
  return Y.createElement(
    Y.Fragment,
    null,
    Y.createElement(
      'div',
      {
        className: `ds-video-section
          
        ${ Pe ? 'ds-video-section--collapse' : '' }
        
        `,
        'data-testid': 'video-section'
      },
      Y.createElement(
        Xg,
        {
          className: 'ds-card ds-video-section__card-video'
        },
        Y.createElement(
          Xg.Body,
          {
            className: 'ds-card__body ds-video-section__card-video-body'
          },
          Y.createElement(
            'div',
            {
              className: 'ds-card__content ds-video-section__card-video-content'
            },
            Y.createElement(
              'div',
              {
                className: 'ds-video-section__embed'
              },
              Y.createElement(
                'div',
                {
                  className: `embed-responsive ${ Er }`
                },
                _ &&
                kt &&
                Y.createElement(
                  'div',
                  {
                    className: 'ds-video-section__offline'
                  },
                  Y.createElement(
                    'p',
                    {
                      className: 'ds-video-section__offline-title'
                    },
                    'Offline mode'
                  ),
                  Rt ? Y.createElement(
                    'p',
                    {
                      className: 'ds-video-section__offline-label'
                    },
                    'It seems you\'re trying to watch a video that hasn\'t been downloaded. Download your favorite videos and you can enjoy them offline in the',
                    Y.createElement(
                      wl,
                      {
                        to: nL,
                        className: 'ds-link-primary'
                      },
                      ' Library > Downloads '
                    ),
                    'section of our website.'
                  ) : Y.createElement(
                    'p',
                    {
                      className: 'ds-video-section__offline-label'
                    },
                    'Offline downloads are available with a Premium plan.',
                    Y.createElement('br', null),
                    Y.createElement(
                      wl,
                      {
                        to: Vo({
                          path: ZI,
                          language: z
                        }),
                        className: 'ds-link-primary'
                      },
                      'Upgrade to premium'
                    ),
                    ' ',
                    'and enjoy watching videos offline anytime!'
                  )
                ),
                _ &&
                !kt &&
                Y.createElement(
                  'div',
                  {
                    className: 'ds-video-section__offline'
                  },
                  Y.createElement(
                    'p',
                    {
                      className: 'ds-video-section__offline-title'
                    },
                    'Offline mode'
                  ),
                  Y.createElement(
                    'p',
                    {
                      className: 'ds-video-section__offline-label'
                    },
                    'You can watch this video offline by installing the app.'
                  )
                ),
                !_ &&
                Y.createElement(
                  Y.Fragment,
                  null,
                  Y.createElement(
                    'div',
                    {
                      className: 'ds-video-section__default'
                    },
                    Go &&
                    Y.createElement(
                      'img',
                      {
                        className: 'ds-video-section__default-image',
                        src: Go,
                        alt: 'thumbnail',
                        'data-testid': 'video-thumbnail'
                      }
                    ),
                    !N &&
                    Y.createElement(iC, null)
                  ),
                  D &&
                  Y.createElement(
                    Y.Fragment,
                    null,
                    K === 'youtube' &&
                    Y.createElement(
                      wN,
                      {
                        ref: v,
                        video: N,
                        onState: xe,
                        'data-testid': 'video-youtube-player'
                      }
                    ),
                    K === 'bunny' &&
                    $ &&
                    $.length > 0 &&
                    Y.createElement(
                      pU,
                      {
                        ref: v,
                        video: N,
                        displayType: b,
                        manifest: ae,
                        onState: xe,
                        onNext: Se,
                        'data-testid': 'video-shaka-player'
                      }
                    )
                  ),
                  Y.createElement(
                    UL,
                    {
                      show: re,
                      loginCallback: () => {
                        Oe(!0),
                        ue(!1),
                        Te(!0),
                        $e({
                          type: 'SIGN_IN',
                          payload: {
                            isClosable: !1,
                            message: 'Log in to watch this private video.'
                          }
                        })
                      },
                      unlockNowCallback: () => {
                        Oe(!0),
                        ue(!1),
                        gt.push(Vo({
                          path: ZI,
                          language: z
                        }))
                      }
                    }
                  ),
                  Y.createElement(OL, {
                    show: he,
                    continueCallback: () => {
                      Oe(!0),
                      qe(!1)
                    }
                  }),
                  Y.createElement(
                    jL,
                    {
                      show: L &&
                      !re &&
                      !he,
                      showPlayNext: W,
                      videoA: fe,
                      videoB: m,
                      autoplaySeconds: ie,
                      autoplayCancelled: Q,
                      onClose: () => Ke(!1),
                      onPlay: () => {
                        v.current?.play(),
                        Ke(!1)
                      },
                      onNextVideo: () => {
                        Se(),
                        Ke(!1)
                      },
                      cancelPlayNext: A
                    }
                  )
                )
              )
            ),
            (!ne || !N) &&
            !_ &&
            !Pe &&
            Y.createElement(
              'div',
              {
                className: 'ds-page__spinner'
              },
              Y.createElement(iC, null)
            ),
            ne &&
            N &&
            Y.createElement(
              'div',
              {
                className: `ds-video-section__information
                    
                ${ H ||
                Pe ? 'ds-video-section__information--hidden' : '' }
                  
                `
              },
              _R(N, pt.data, ht.data, ze, Ee, Ge, oo),
              xU(N.description),
              Y.createElement(
                'div',
                {
                  className: 'ds-video-section__badges',
                  'data-testid': 'video-badges'
                },
                DR(pn, N.level, z),
                Y.createElement(VideoDifficultyBadge, { difficultyScore: N.difficultyScore }),
                PR(N.private),
                RR(pn, N.guides, U.data?.guidesDictionary, z),
                bR(pn, N.guides, z),
                LR(pn, N.tags, z)
              ),
              NR(N.publishedAt),
              wU(Re, N._id, z),
              UR({
                isOnline: En,
                videoId: N._id,
                language: z
              })
            ),
            _ &&
            Y.createElement(
              'div',
              {
                className: `ds-video-section__information
                    
                ${ Pe ? 'ds-video-section__information--toggle' : '' }
                  
                `
              },
              _R(_, pt.data, ht.data, ze, Ee, Ge, oo),
              Y.createElement(
                'div',
                {
                  className: 'ds-video-section__badges'
                },
                DR(pn, _.level, z),
                PR(_.private),
                RR(pn, _.guides, U.data?.guidesDictionary, z),
                bR(pn, _.guides, z),
                LR(pn, _.tags, z)
              ),
              NR(_.publishedAt),
              N &&
              UR({
                isOnline: En,
                videoId: N._id,
                language: z
              })
            )
          )
        )
      ),
      !Pe &&
      Y.createElement(
        Xg,
        {
          className: 'ds-card ds-video-section__card-comments',
          'data-testid': 'video-comments-card'
        },
        Y.createElement(
          Xg.Body,
          {
            className: 'ds-card__body ds-video-section__card-comments-body'
          },
          Y.createElement(
            'div',
            {
              className: `
                  ds-card__content ds-video-section__card-comments-content
                  
              ${ H ? 'ds-video-section__card-comments-content--show' : '' }
                
              `
            },
            Y.createElement(
              'div',
              {
                className: 'ds-video-section__card-comments-header',
                onClick: () => {
                  ce(!H && En),
                  an(void 0)
                },
                'data-testid': 'video-comments-button'
              },
              Y.createElement(
                'div',
                {
                  className: 'ds-video-section__card-comments-header-left'
                },
                Y.createElement(
                  gs,
                  {
                    className: 'ds-video-section__card-comments-header-icon',
                    icon: 'line-comments'
                  }
                ),
                Y.createElement(
                  'div',
                  {
                    className: 'ds-video-section__card-comments-header-title'
                  },
                  H &&
                  Gt ? Y.createElement('span', null, Gt) : Y.createElement('span', null, 'View comments'),
                  !En &&
                  Y.createElement(iL, null)
                )
              ),
              Y.createElement(
                'div',
                {
                  className: 'ds-video-section__card-comments-header-right'
                },
                (H || En) &&
                Y.createElement(
                  gs,
                  {
                    className: 'ds-video-section__card-comments-header-toggle-icon ds-video-section__card-comments-header-toggle-icon--up',
                    icon: 'thick-arrow-up'
                  }
                ),
                Y.createElement(
                  gs,
                  {
                    className: `
                        ds-video-section__card-comments-header-toggle-icon ds-video-section__card-comments-header-toggle-icon--down
                        
                    ${ H ? 'ds-video-section__card-comments-header-toggle-icon--toggle' : '' }
                      
                    `,
                    icon: 'thick-arrow-down'
                  }
                )
              )
            ),
            N &&
            H &&
            Y.createElement(
              'div',
              {
                className: 'ds-video-section__card-comments-collapsable',
                'data-testid': 'video-comments-content'
              },
              Y.createElement(
                rL,
                {
                  identifier: N._id,
                  page: 'Watch',
                  title: N.title,
                  url: window.location.href,
                  videoLanguage: N.language,
                  onCommentsCountChange: zn => {
                    an(zn)
                  }
                }
              )
            )
          )
        )
      )
    ),
    Y.createElement(
      sL,
      {
        show: Gn,
        videoUrl: Br,
        videoTitle: N?.title,
        closeCallback: () => hn(!1)
      }
    )
  )
};
