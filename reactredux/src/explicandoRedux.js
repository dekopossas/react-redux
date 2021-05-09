function dekinhoSelecao (category, movie) {
  return {
    category,
    movie,
  }
};

const papel = dekinhoSelecao('terror', 'buneco chuck');


console.log(papel.category);