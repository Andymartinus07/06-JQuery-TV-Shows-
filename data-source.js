function DataSource(onSuccess, onFailed) {
  this.onSuccess = onSuccess;
  this.onFailed = onFailed;
}

DataSource.prototype.searchFilm = function (keyword) {
  var filteredFilms = Films.filter(function (Film) {
    return Film.name.toUpperCase().includes(keyword.toUpperCase());
  });

  if (filteredFilms.length) {
    this.onSuccess(filteredFilms);
  } else {
    this.onFailed(keyword + ' is not found');
  }
};