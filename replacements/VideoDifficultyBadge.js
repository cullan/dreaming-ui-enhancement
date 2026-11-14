export function VideoDifficultyBadge({ difficultyScore = 0 }) {
  return reactExports.createElement(
    Badge,
    {
      variant: 'neutral',
      size: 'xs',
      startIcon: reactExports.createElement(
        Icon,
        {
          icon: 'thick-difficulty'
        }
      )
    },
    calculateDifficulty(difficultyScore)
  );
}
