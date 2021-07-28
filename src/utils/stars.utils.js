export const getSelectedStar = (starId, stars) =>
  stars.find((star) => star.id === starId);
