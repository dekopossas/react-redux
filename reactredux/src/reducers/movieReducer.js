import categories from '../data';

const INITIAL_STATE = {
  selectedCategory: {},
  selectedMovie: {},
  categories: [...categories],
};

function movieRenderer(state = INITIAL_STATE, papel) {
  console.log(papel);
  if (papel.type === 'SELECT_MOVIE'){
    return {
      ...state,
      selectedCategory: papel.category,
      selectedMovie: papel.movie,
    }
  }

  return state
}

export default movieRenderer;
