import { VideoDifficultyBadge } from './index-BbEUsQaR.js';

si = (n) => {
  const {
    language: t,
    video: a,
    isFetchedVideo: s,
    offlineVideo: o,
    videoA: r,
    videoB: m,
    feedbackPrompt: p,
    autoplaySeconds: l,
    autoplayCancelled: i,
    series: f,
    nextVideos: d,
    displayType: y,
    source: _,
    showPlayer: h,
    requiresAccountToWatch: k,
    showPlayNext: g,
    showOverlay: b,
    showComments: E,
    showPremiumMessage: I,
    showBackgroundMessage: T,
    showPlaylist: w,
    onNextVideo: S,
    onShowPlayer: M,
    onShowOverlay: x,
    onCancelPlayNext: U,
    onShowComments: Q,
    onShowPremiumMessage: F,
    onShowBackgroundMessage: W,
    onShowLoginModal: R,
    onMarkVideoAsWatched: C,
    onMarkVideoAsUnwatched: A
  }
  = n,
  {
    registerWatchSlot: L,
    registerActivePlayer: j,
    handlePlayerEvent: ne,
    play: me
  }
  = vs(),
  X = e.useCallback(q => j(q), [
    j
  ]),
  O = e.useCallback(q => L(q), [
    L
  ]),
  V = xt(),
  Ie = gs(),
  {
    browseState: c
  }
  = e.useContext(en),
  ae = Bt(),
  se = ns(),
  {
    user: re,
    dispatch: oe
  }
  = nt(),
  Ve = Gt(),
  ve = _s({
    language: t
  }),
  Te = ot({
    language: t
  }),
  ee = Wt({
    language: t
  }),
  Ae = Qt({
    language: t
  }),
  [
    Le,
    he
  ] = e.useState(),
  [
    Fe,
    ge
  ] = e.useState(!1),
  Ue = e.useMemo(
    () => {
      if (!(!s || !a || !f) && a.seriesId && y !== 'series') return f.find(q => q._id === a.seriesId)
    },
    [
      s,
      a,
      f,
      y
    ]
  );
  let _e = 'embed-responsive-16by9';
  (!a || a.aspectRatio === '2:1') &&
  (_e = 'embed-responsive-2by1');
  const Ee = e.useMemo(() => a?._id && `${ qt }/${ a._id }.jpg`, [
    a?._id
  ]);
  e.useEffect(
    () => {
      if (!new URLSearchParams(window.location.search).get('comments')) return;
      const we = new URLSearchParams(window.location.search),
      ce = new URLSearchParams(window.location.search);
      ce.delete('comments'),
      V.replace({
        pathname: window.location.pathname,
        search: ce.toString()
      }),
      V.push({
        pathname: window.location.pathname,
        search: we.toString()
      })
    },
    []
  ),
  e.useEffect(
    () => {
      const q = new URLSearchParams(Ie.search).get('comments');
      !a ||
      !q ||
      tn.next({
        show: !0,
        identifier: a._id,
        videoLanguage: a.language
      })
    },
    [
      Ie,
      a
    ]
  ),
  e.useEffect(
    () => {
      const q = window.matchMedia(an('lg'));
      function we() {
        Q(!1),
        he(void 0)
      }
      return q.addEventListener('change', we),
      () => q.removeEventListener('change', we)
    },
    [
      Q,
      he
    ]
  );
  const be = a ? `${ window.location.origin }${ J({
    path: ye,
    language: t,
    params: {
      id: a._id
    }
  }) }` : '',
  Ye = async() => {
    if (pn && typeof navigator.share == 'function') try {
      await navigator.share({
        title: a?.title,
        url: be
      })
    } catch {
    } else ge(!0)
  };
  return e.createElement(
    e.Fragment,
    null,
    e.createElement(
      'div',
      {
        className: `ds-video-section
          
        ${ w ? 'ds-video-section--collapse' : '' }
        
        `,
        'data-testid': 'video-section'
      },
      e.createElement(
        Ot,
        {
          className: 'ds-video-section__card-video'
        },
        e.createElement(
          Mt,
          {
            className: 'ds-video-section__card-video-content'
          },
          e.createElement(
            'div',
            {
              className: 'ds-video-section__embed'
            },
            e.createElement(
              'div',
              {
                className: `embed-responsive ${ _e }`
              },
              o &&
              se &&
              e.createElement(
                'div',
                {
                  className: 'ds-video-section__offline'
                },
                e.createElement(
                  'p',
                  {
                    className: 'ds-video-section__offline-title'
                  },
                  'Offline mode'
                ),
                ee ? e.createElement(
                  'p',
                  {
                    className: 'ds-video-section__offline-label'
                  },
                  'It seems you\'re trying to watch a video that hasn\'t been downloaded. Download your favorite videos and you can enjoy them offline in the',
                  e.createElement(
                    fe,
                    {
                      to: sn,
                      className: 'ds-link-primary'
                    },
                    ' Library > Downloads '
                  ),
                  'section of our website.'
                ) : e.createElement(
                  'p',
                  {
                    className: 'ds-video-section__offline-label'
                  },
                  'Offline downloads are available with a Premium plan.',
                  e.createElement('br', null),
                  e.createElement(
                    fe,
                    {
                      to: J({
                        path: Tt,
                        language: t
                      }),
                      className: 'ds-link-primary'
                    },
                    'Upgrade to premium'
                  ),
                  ' ',
                  'and enjoy watching videos offline anytime!'
                )
              ),
              o &&
              !se &&
              e.createElement(
                'div',
                {
                  className: 'ds-video-section__offline'
                },
                e.createElement(
                  'p',
                  {
                    className: 'ds-video-section__offline-title'
                  },
                  'Offline mode'
                ),
                e.createElement(
                  'p',
                  {
                    className: 'ds-video-section__offline-label'
                  },
                  'You can watch this video offline by installing the app.'
                )
              ),
              !o &&
              e.createElement(
                e.Fragment,
                null,
                e.createElement(
                  'div',
                  {
                    className: 'ds-video-section__default'
                  },
                  Ee &&
                  e.createElement(
                    'img',
                    {
                      className: 'ds-video-section__default-image',
                      src: Ee,
                      alt: 'thumbnail',
                      'data-testid': 'video-thumbnail'
                    }
                  ),
                  !a &&
                  e.createElement(Vt, null)
                ),
                h &&
                e.createElement(
                  e.Fragment,
                  null,
                  _ === K.YOUTUBE &&
                  e.createElement(ks, {
                    ref: X,
                    video: a,
                    onState: ne
                  }),
                  (_ === K.BUNNY || _ === K.CLOUDFLARE) &&
                  e.createElement('div', {
                    className: 'ds-persistent-player__slot',
                    ref: O
                  })
                ),
                I &&
                e.createElement(
                  kt,
                  {
                    testId: 'premium-message',
                    image: '/assets/images/icons/premium.svg',
                    title: 'You\'re trying to watch a premium video.',
                    subtitle: re?.verified ? 'Subscribe to watch this and more premium videos.' : void 0,
                    action: {
                      label: re?.verified ? 'Unlock now' : 'Log in',
                      onClick: () => {
                        if (M(!0), F(!1), re?.verified) {
                          V.push(J({
                            path: Tt,
                            language: t
                          }));
                          return
                        }
                        R(!0),
                        oe({
                          type: 'SIGN_IN',
                          payload: {
                            isClosable: !1,
                            message: 'Log in to watch this private video.'
                          }
                        })
                      }
                    }
                  }
                ),
                k &&
                a &&
                e.createElement(
                  kt,
                  {
                    testId: 'account-message',
                    image: '/assets/images/logos/light.png',
                    title: 'Create a free account to watch',
                    action: {
                      label: 'Sign up',
                      onClick: () => oe({
                        type: 'SIGN_UP',
                        payload: {
                          message: 'Create a free account to watch.'
                        }
                      })
                    },
                    footer: {
                      text: 'Already have an account?',
                      action: {
                        label: 'Log in',
                        onClick: () => oe({
                          type: 'SIGN_IN'
                        })
                      }
                    }
                  }
                ),
                T &&
                e.createElement(
                  kt,
                  {
                    image: '/assets/images/icons/premium.svg',
                    title: 'You\'re trying to watch a video in the background.',
                    subtitle: 'Subscribe to enable background play on mobile.',
                    action: {
                      label: 'Continue watching video',
                      onClick: () => {
                        M(!0),
                        W(!1)
                      }
                    }
                  }
                ),
                e.createElement(
                  _o,
                  {
                    show: b &&
                    !I &&
                    !T,
                    showPlayNext: g,
                    videoA: r,
                    videoB: m,
                    prompt: p,
                    autoplaySeconds: l,
                    autoplayCancelled: i,
                    onClose: () => x(!1),
                    onPlay: () => {
                      me(),
                      x(!1)
                    },
                    onNextVideo: () => {
                      S(),
                      x(!1)
                    },
                    cancelPlayNext: U
                  }
                )
              )
            )
          ),
          (!s || !a) &&
          !o &&
          !w &&
          e.createElement(
            'div',
            {
              className: 'ds-page__spinner'
            },
            e.createElement(Vt, null)
          ),
          s &&
          a &&
          e.createElement(
            'div',
            {
              className: `ds-video-section__information
                    
              ${ E ||
              w ? 'ds-video-section__information--hidden' : '' }
                  
              `
            },
            Ka(a, Ve.data, Te.data, Ae, C, A, Ye),
            ni(a.description),
            e.createElement(
              'div',
              {
                className: 'ds-video-section__badges',
                'data-testid': 'video-badges'
              },
              Ja(c, a.level, t),
              e.createElement(VideoDifficultyBadge, { difficultyScore: a.difficultyScore }),
              $a(a.private),
              Za(c, a.guides, ve.data?.guidesDictionary, t),
              Xa(c, a.guides, t),
              es(c, a.tags, t)
            ),
            ts(a.publishedAt),
            oi(Ue, a._id, t),
            as({
              isOnline: ae,
              videoId: a._id,
              language: t
            })
          ),
          o &&
          e.createElement(
            'div',
            {
              className: `ds-video-section__information
                    
              ${ w ? 'ds-video-section__information--toggle' : '' }
                  
              `
            },
            Ka(o, Ve.data, Te.data, Ae, C, A, Ye),
            e.createElement(
              'div',
              {
                className: 'ds-video-section__badges'
              },
              Ja(c, o.level, t),
              $a(o.private),
              Za(c, o.guides, ve.data?.guidesDictionary, t),
              Xa(c, o.guides, t),
              es(c, o.tags, t)
            ),
            ts(o.publishedAt),
            a &&
            as({
              isOnline: ae,
              videoId: a._id,
              language: t
            })
          )
        )
      ),
      !w &&
      e.createElement(
        Ot,
        {
          className: 'ds-video-section__card-comments',
          'data-testid': 'video-comments-card'
        },
        e.createElement(
          Mt,
          {
            className: `
                ds-video-section__card-comments-content
                
            ${ E ? 'ds-video-section__card-comments-content--show' : '' }
              
            `
          },
          e.createElement(
            'div',
            {
              className: 'ds-video-section__card-comments-header',
              onClick: () => {
                Q(!E && ae),
                he(void 0)
              },
              'data-testid': 'video-comments-button'
            },
            e.createElement(
              'div',
              {
                className: 'ds-video-section__card-comments-header-left'
              },
              e.createElement(
                Z,
                {
                  className: 'ds-video-section__card-comments-header-icon',
                  icon: 'line-comments'
                }
              ),
              e.createElement(
                'div',
                {
                  className: 'ds-video-section__card-comments-header-title'
                },
                E &&
                Le ? e.createElement('span', null, Le) : e.createElement('span', null, 'View comments'),
                !ae &&
                e.createElement(nn, null)
              )
            ),
            e.createElement(
              'div',
              {
                className: 'ds-video-section__card-comments-header-right'
              },
              (E || ae) &&
              e.createElement(
                Z,
                {
                  className: 'ds-video-section__card-comments-header-toggle-icon ds-video-section__card-comments-header-toggle-icon--up',
                  icon: 'thick-arrow-up'
                }
              ),
              e.createElement(
                Z,
                {
                  className: `
                        ds-video-section__card-comments-header-toggle-icon ds-video-section__card-comments-header-toggle-icon--down
                        
                  ${ E ? 'ds-video-section__card-comments-header-toggle-icon--toggle' : '' }
                      
                  `,
                  icon: 'thick-arrow-down'
                }
              )
            )
          ),
          a &&
          E &&
          e.createElement(
            'div',
            {
              className: 'ds-video-section__card-comments-collapsable',
              'data-testid': 'video-comments-content'
            },
            e.createElement(
              on,
              {
                identifier: a._id,
                videoLanguage: a.language,
                onCommentsCountChange: q => {
                  he(q)
                }
              }
            )
          )
        )
      )
    ),
    e.createElement(
      rn,
      {
        show: Fe,
        videoUrl: be,
        videoTitle: a?.title,
        closeCallback: () => ge(!1)
      }
    )
  )
}
