CatalogVideoCard = (n) => {
  const {
    video: s,
    userState: l,
    watchedVideos: u,
    playlistItems: p
  }
    = n,
    {
      ref: m,
      isPointerInside: g,
      isHovered: y,
      onMouseEnter: x,
      onMouseLeave: E
    }
      = useHoverPreview();
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    reactExports.createElement(
      'div',
      {
        ref: m,
        className: `ds-catalog-video-card ${ s.private ? 'ds-catalog-video-card--premium' : '' }`,
        'data-testid': 'catalog-video-card',
        onMouseEnter: x,
        onMouseLeave: E
      },
      reactExports.createElement(
        VideoThumbnail,
        {
          video: s,
          watchedVideos: u,
          showDifficulty: !1,
          isPointerInside: g,
          isHovered: y
        }
      ),
      reactExports.createElement(
        'div',
        {
          className: 'ds-catalog-video-card__content'
        },
        reactExports.createElement(
          'div',
          {
            className: 'ds-catalog-video-card__header'
          },
          reactExports.createElement('p', {
            className: 'ds-catalog-video-card__title'
          }, s.title),
          reactExports.createElement(
            VideoOptions,
            {
              video: s,
              userState: l,
              watchedVideos: u,
              playlistItems: p,
              cssClass: 'ds-catalog-video-card__video-options'
            }
          )
        ),
        reactExports.createElement(
          'div',
          {
            className: 'ds-catalog-video-card__footer'
          },
          reactExports.createElement(
            'div',
            {
              className: 'ds-catalog-video-card__badges'
            },
            reactExports.createElement(LevelBadge, {
              level: s.level
            }),
            reactExports.createElement(VideoDifficultyBadge, { difficultyScore: s.difficultyScore }),
            s.private &&
              reactExports.createElement(
                Badge,
                {
                  variant: 'secondary',
                  size: 'sm',
                  startIcon: 'thick-star'
                },
                'Premium'
              ),
            (s.tags.includes('+18') || s.tags.includes('18+')) &&
              reactExports.createElement(Badge, {
                variant: 'error-alternative',
                size: 'sm'
              }, '18+')
          )
        )
      )
    )
  )
};
