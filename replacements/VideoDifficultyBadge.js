export function VideoDifficultyBadge({ difficultyScore = 0 }) {
  return reactExports.createElement(
    Badge,
    {
      variant: 'neutral',
      size: 'xs',
      startIcon: 'thick-difficulty'
    },
    calculateDifficulty(difficultyScore)
  );
}
