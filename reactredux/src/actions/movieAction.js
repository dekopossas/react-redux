export function selectedMovie(category, movie) {
  return {
    type: 'SELECT_MOVIE',
    category,
    movie,
  }
};
