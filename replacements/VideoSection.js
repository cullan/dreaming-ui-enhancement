import { VideoDifficultyBadge, reactExports } from './index-U04H6ScC.js';

cn = (i) => {
  const {
    language: e,
    video: t,
    isFetchedVideo: a,
    offlineVideo: n,
    videoA: d,
    videoB: p,
    feedbackPrompt: v,
    autoplaySeconds: l,
    autoplayCancelled: r,
    series: f,
    nextVideos: u,
    displayType: y,
    source: b,
    showPlayer: m,
    requiresAccountToWatch: S,
    showPlayNext: E,
    showOverlay: P,
    showComments: k,
    showPremiumMessage: j,
    showBackgroundMessage: I,
    showPlaylist: g,
    onNextVideo: N,
    onShowPlayer: F,
    onShowOverlay: R,
    onCancelPlayNext: U,
    onShowComments: Q,
    onShowPremiumMessage: Y,
    onShowBackgroundMessage: B,
    onShowLoginModal: w,
    onMarkVideoAsWatched: O,
    onMarkVideoAsUnwatched: W
  }
  = i,
  {
    registerWatchSlot: K,
    registerActivePlayer: Z,
    handlePlayerEvent: A,
    play: M,
    cast: he
  }
  = Ea(),
  h = o.useCallback(x => Z(x), [
    Z
  ]),
  pe = o.useCallback(x => K(x), [
    K
  ]),
  ae = zt(),
  ne = ka(),
  {
    browseState: J
  }
  = o.useContext(oi),
  me = Kt(),
  ge = ua(),
  {
    user: _e,
    dispatch: X
  }
  = ht(),
  je = Xt(),
  qe = Pa({
    language: e
  }),
  Ie = pt({
    language: e
  }),
  Ge = Jt({
    language: e
  }),
  be = $t({
    language: e
  }),
  [
    Ae,
    re
  ] = o.useState(),
  [
    Te,
    we
  ] = o.useState(!1),
  gt = o.useMemo(
    () => {
      if (!(!a || !t || !f) && t.seriesId && y !== 'series') return f.find(x => x._id === t.seriesId)
    },
    [
      a,
      t,
      f,
      y
    ]
  ),
  De = !t ||
  t.aspectRatio === '2:1' ? '2 / 1' : '16 / 9',
  He = o.useMemo(() => t?._id && Zt(t._id), [
    t?._id
  ]);
  o.useEffect(
    () => {
      if (!new URLSearchParams(window.location.search).get('comments')) return;
      const ve = new URLSearchParams(window.location.search),
      Oe = new URLSearchParams(window.location.search);
      Oe.delete('comments'),
      ae({
        pathname: window.location.pathname,
        search: Oe.toString()
      }, {
        replace: !0
      }),
      ae({
        pathname: window.location.pathname,
        search: ve.toString()
      })
    },
    []
  ),
  o.useEffect(
    () => {
      const x = new URLSearchParams(ne.search).get('comments');
      !t ||
      !x ||
      ni.next({
        show: !0,
        identifier: t._id,
        videoLanguage: t.language
      })
    },
    [
      ne,
      t
    ]
  ),
  o.useEffect(
    () => {
      const x = window.matchMedia(ri('lg'));
      function ve() {
        Q(!1),
        re(void 0)
      }
      return x.addEventListener('change', ve),
      () => x.removeEventListener('change', ve)
    },
    [
      Q,
      re
    ]
  );
  const de = t ? `${ window.location.origin }${ te({
    path: Ce,
    language: e,
    params: {
      id: t._id
    }
  }) }` : '',
  Re = async() => {
    if (_i && typeof navigator.share == 'function') try {
      await navigator.share({
        title: t?.title,
        url: de
      })
    } catch {
    } else we(!0)
  };
  return s.jsxs(
    s.Fragment,
    {
      children: [
        s.jsxs(
          'div',
          {
            className: `ds-video-section
          
            ${ g ? 'ds-video-section--collapse' : '' }
        
            `,
            'data-testid': 'video-section',
            children: [
              s.jsx(
                Yt,
                {
                  className: 'ds-video-section__card-video',
                  children: s.jsxs(
                    Bt,
                    {
                      className: 'ds-video-section__card-video-content',
                      children: [
                        s.jsx(
                          'div',
                          {
                            className: 'ds-video-section__embed',
                            children: s.jsxs(
                              'div',
                              {
                                className: 'ds-video-section__player',
                                'data-fullscreen-target': !0,
                                style: {
                                  aspectRatio: De
                                },
                                children: [
                                  n &&
                                  ge &&
                                  s.jsxs(
                                    'div',
                                    {
                                      className: 'ds-video-section__offline',
                                      children: [
                                        s.jsx(
                                          'p',
                                          {
                                            className: 'ds-video-section__offline-title',
                                            children: 'Offline mode'
                                          }
                                        ),
                                        Ge ? s.jsxs(
                                          'p',
                                          {
                                            className: 'ds-video-section__offline-label',
                                            children: [
                                              'It seems you\'re trying to watch a video that hasn\'t been downloaded. Download your favorite videos and you can enjoy them offline in the',
                                              ' ',
                                              s.jsx(z, {
                                                appearance: 'link',
                                                to: di,
                                                children: 'Library > Downloads'
                                              }),
                                              ' ',
                                              'section of our website.'
                                            ]
                                          }
                                        ) : s.jsxs(
                                          'p',
                                          {
                                            className: 'ds-video-section__offline-label',
                                            children: [
                                              'Offline downloads are available with a Premium plan.',
                                              s.jsx('br', {
                                              }),
                                              s.jsx(
                                                z,
                                                {
                                                  appearance: 'link',
                                                  to: te({
                                                    path: Vt,
                                                    language: e
                                                  }),
                                                  children: 'Upgrade to premium'
                                                }
                                              ),
                                              ' ',
                                              'and enjoy watching videos offline anytime!'
                                            ]
                                          }
                                        )
                                      ]
                                    }
                                  ),
                                  n &&
                                  !ge &&
                                  s.jsxs(
                                    'div',
                                    {
                                      className: 'ds-video-section__offline',
                                      children: [
                                        s.jsx(
                                          'p',
                                          {
                                            className: 'ds-video-section__offline-title',
                                            children: 'Offline mode'
                                          }
                                        ),
                                        s.jsx(
                                          'p',
                                          {
                                            className: 'ds-video-section__offline-label',
                                            children: 'You can watch this video offline by installing the app.'
                                          }
                                        )
                                      ]
                                    }
                                  ),
                                  !n &&
                                  s.jsxs(
                                    s.Fragment,
                                    {
                                      children: [
                                        s.jsxs(
                                          'div',
                                          {
                                            className: 'ds-video-section__default',
                                            children: [
                                              He &&
                                              s.jsx(
                                                'img',
                                                {
                                                  className: 'ds-video-section__default-image',
                                                  src: He,
                                                  alt: 'thumbnail',
                                                  'data-testid': 'video-thumbnail'
                                                }
                                              ),
                                              !t &&
                                              s.jsx(Wt, {
                                              })
                                            ]
                                          }
                                        ),
                                        m &&
                                        s.jsxs(
                                          s.Fragment,
                                          {
                                            children: [
                                              b === ee.YOUTUBE &&
                                              s.jsx(Ia, {
                                                ref: h,
                                                video: t,
                                                onState: A
                                              }),
                                              (b === ee.BUNNY || b === ee.CLOUDFLARE) &&
                                              s.jsx('div', {
                                                className: 'ds-persistent-player__slot',
                                                ref: pe
                                              })
                                            ]
                                          }
                                        ),
                                        j &&
                                        s.jsx(
                                          Tt,
                                          {
                                            testId: 'premium-message',
                                            image: '/assets/images/icons/premium.svg',
                                            title: 'You\'re trying to watch a premium video.',
                                            subtitle: _e?.verified ? 'Subscribe to watch this and more premium videos.' : void 0,
                                            action: {
                                              label: _e?.verified ? 'Unlock now' : 'Log in',
                                              onClick: () => {
                                                if (F(!0), Y(!1), _e?.verified) {
                                                  ae(te({
                                                    path: Vt,
                                                    language: e
                                                  }));
                                                  return
                                                }
                                                w(!0),
                                                X({
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
                                        S &&
                                        t &&
                                        s.jsx(
                                          Tt,
                                          {
                                            testId: 'account-message',
                                            image: '/assets/images/logos/light.png',
                                            title: 'Create a free account to watch',
                                            action: {
                                              label: 'Sign up',
                                              onClick: () => X({
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
                                                onClick: () => X({
                                                  type: 'SIGN_IN'
                                                })
                                              }
                                            }
                                          }
                                        ),
                                        I &&
                                        s.jsx(
                                          Tt,
                                          {
                                            image: '/assets/images/icons/premium.svg',
                                            title: 'You\'re trying to watch a video in the background.',
                                            subtitle: 'Subscribe to enable background play on mobile.',
                                            action: {
                                              label: 'Continue watching video',
                                              onClick: () => {
                                                F(!0),
                                                B(!1)
                                              }
                                            }
                                          }
                                        ),
                                        s.jsx(
                                          Po,
                                          {
                                            show: P &&
                                            !j &&
                                            !I &&
                                            !he.isConnected,
                                            showPlayNext: E,
                                            videoA: d,
                                            videoB: p,
                                            prompt: v,
                                            autoplaySeconds: l,
                                            autoplayCancelled: r,
                                            onClose: () => R(!1),
                                            onPlay: () => {
                                              M(),
                                              R(!1)
                                            },
                                            onNextVideo: () => {
                                              N(),
                                              R(!1)
                                            },
                                            cancelPlayNext: U
                                          }
                                        )
                                      ]
                                    }
                                  )
                                ]
                              }
                            )
                          }
                        ),
                        (!a || !t) &&
                        !n &&
                        !g &&
                        s.jsx('div', {
                          className: 'ds-page__spinner',
                          children: s.jsx(Wt, {
                          })
                        }),
                        a &&
                        t &&
                        s.jsxs(
                          'div',
                          {
                            className: `ds-video-section__information
                    
                            ${ k ||
                            g ? 'ds-video-section__information--hidden' : '' }
                  
                            `,
                            children: [
                              sa(t, je.data, Ie.data, be, O, W, () => {
                                Re()
                              }),
                              un(t.description),
                              s.jsxs(
                                'div',
                                {
                                  className: 'ds-video-section__badges',
                                  'data-testid': 'video-badges',
                                  children: [
                                    aa(J, t.level, e),
                                    reactExports.createElement(VideoDifficultyBadge, { difficultyScore: t.difficultyScore }),
                                    ia(t.private),
                                    oa(J, t.guides, qe.data?.guidesDictionary, e),
                                    na(J, t.guides, e),
                                    ra(J, t.tags, e)
                                  ]
                                }
                              ),
                              da(t.publishedAt),
                              fn(gt, t._id, e),
                              la({
                                isOnline: me,
                                videoId: t._id,
                                language: e
                              })
                            ]
                          }
                        ),
                        n &&
                        s.jsxs(
                          'div',
                          {
                            className: `ds-video-section__information
                    
                            ${ g ? 'ds-video-section__information--toggle' : '' }
                  
                            `,
                            children: [
                              sa(n, je.data, Ie.data, be, O, W, () => {
                                Re()
                              }),
                              s.jsxs(
                                'div',
                                {
                                  className: 'ds-video-section__badges',
                                  children: [
                                    aa(J, n.level, e),
                                    ia(n.private),
                                    oa(J, n.guides, qe.data?.guidesDictionary, e),
                                    na(J, n.guides, e),
                                    ra(J, n.tags, e)
                                  ]
                                }
                              ),
                              da(n.publishedAt),
                              t &&
                              la({
                                isOnline: me,
                                videoId: t._id,
                                language: e
                              })
                            ]
                          }
                        )
                      ]
                    }
                  )
                }
              ),
              !g &&
              s.jsx(
                Yt,
                {
                  className: 'ds-video-section__card-comments',
                  'data-testid': 'video-comments-card',
                  children: s.jsxs(
                    Bt,
                    {
                      className: `
                ds-video-section__card-comments-content
                
                      ${ k ? 'ds-video-section__card-comments-content--show' : '' }
              
                      `,
                      children: [
                        s.jsxs(
                          'div',
                          {
                            className: 'ds-video-section__card-comments-header',
                            onClick: () => {
                              Q(!k && me),
                              re(void 0)
                            },
                            'data-testid': 'video-comments-button',
                            children: [
                              s.jsxs(
                                'div',
                                {
                                  className: 'ds-video-section__card-comments-header-left',
                                  children: [
                                    s.jsx(
                                      se,
                                      {
                                        className: 'ds-video-section__card-comments-header-icon',
                                        icon: 'line-comments'
                                      }
                                    ),
                                    s.jsxs(
                                      'div',
                                      {
                                        className: 'ds-video-section__card-comments-header-title',
                                        children: [
                                          k &&
                                          Ae ? s.jsx('span', {
                                            children: Ae
                                          }) : s.jsx('span', {
                                            children: 'View comments'
                                          }),
                                          !me &&
                                          s.jsx(li, {
                                          })
                                        ]
                                      }
                                    )
                                  ]
                                }
                              ),
                              s.jsxs(
                                'div',
                                {
                                  className: 'ds-video-section__card-comments-header-right',
                                  children: [
                                    (k || me) &&
                                    s.jsx(
                                      se,
                                      {
                                        className: 'ds-video-section__card-comments-header-toggle-icon ds-video-section__card-comments-header-toggle-icon--up',
                                        icon: 'thick-arrow-up'
                                      }
                                    ),
                                    s.jsx(
                                      se,
                                      {
                                        className: `
                        ds-video-section__card-comments-header-toggle-icon ds-video-section__card-comments-header-toggle-icon--down
                        
                                        ${ k ? 'ds-video-section__card-comments-header-toggle-icon--toggle' : '' }
                      
                                        `,
                                        icon: 'thick-arrow-down'
                                      }
                                    )
                                  ]
                                }
                              )
                            ]
                          }
                        ),
                        t &&
                        k &&
                        s.jsx(
                          'div',
                          {
                            className: 'ds-video-section__card-comments-collapsable',
                            'data-testid': 'video-comments-content',
                            children: s.jsx(
                              ci,
                              {
                                identifier: t._id,
                                videoLanguage: t.language,
                                onCommentsCountChange: x => {
                                  re(x)
                                }
                              }
                            )
                          }
                        )
                      ]
                    }
                  )
                }
              )
            ]
          }
        ),
        s.jsx(
          ui,
          {
            show: Te,
            videoUrl: de,
            videoTitle: t?.title,
            closeCallback: () => we(!1)
          }
        )
      ]
    }
  )
}
