EpisodeCard = (n) => {
  const {
    video: s,
    userState: l,
    watchedVideos: u,
    playlistItems: p,
    showDifficulty: m
  }
    = n,
    {
      ref: g,
      isPointerInside: y,
      isHovered: x,
      onMouseEnter: E,
      onMouseLeave: S
    }
      = useHoverPreview();
  return reactExports.createElement(
    reactExports.Fragment,
    null,
    reactExports.createElement(
      'div',
      {
        ref: g,
        className: `ds-episode-card ${ s.private ? 'ds-episode-card--premium' : '' }`,
        onMouseEnter: E,
        onMouseLeave: S
      },
      reactExports.createElement(
        VideoThumbnail,
        {
          video: s,
          watchedVideos: u,
          showDifficulty: m,
          isPointerInside: y,
          isHovered: x
        }
      ),
      reactExports.createElement(
        'div',
        {
          className: 'ds-episode-card__content'
        },
        reactExports.createElement(
          'div',
          {
            className: 'ds-episode-card__header'
          },
          reactExports.createElement(
            'p',
            {
              className: 'ds-episode-card__title'
            },
            'E',
            s.episodeNumber,
            reactExports.createElement('span', null, ': ', s.title)
          ),
          reactExports.createElement(
            VideoOptions,
            {
              video: s,
              userState: l,
              watchedVideos: u,
              playlistItems: p,
              cssClass: 'ds-episode-card__video-options'
            }
          )
        ),
        reactExports.createElement(
          'div',
          {
            className: 'ds-episode-card__footer'
          },
          reactExports.createElement('p', {
            className: 'ds-episode-card__description'
          }, s.description),
          reactExports.createElement(
            'div',
            {
              className: 'ds-episode-card__badges'
            },
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
