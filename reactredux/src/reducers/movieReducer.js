import categories from '../data';

const INITIAL_STATE = {
  selectedCategory: {},
  selectedMovie: {},
  categories: [...categories],
};

function movieReducer(state = INITIAL_STATE, action) {
  return state;
};

export default movieReducer;
