var main = function () {
  var searchElement = document.querySelector('#searchElement');
  var buttonSearchElement = document.querySelector('#searchButtonElement');
  var FilmListElement = document.querySelector('#FilmList');

  var onButtonSearchClicked = function () {
    var dataSource = new DataSource(renderResult, fallbackResult);
    dataSource.searchFilm(searchElement.value);
  };

  var renderResult = function (results) {
    FilmListElement.innerHTML = '';
    results.forEach(function (Film) {
      var name = Film.name;
      var gambar = Film.gambar;
      var sinopsis = Film.sinopsis;
      var Rating = Film.Rating;

      var FilmElement = document.createElement('div');
      FilmElement.setAttribute('class', 'Film');

      FilmElement.innerHTML = '<img class="fan-art-Film" src="' + gambar + '" alt="Fan Art">\n' +
          '<div class="Film-info">\n' +
          '<h2>' + name + '</h2>\n' + 
          '<p>' + '<b> Sinopsis : </b>' + sinopsis + '</p>' + 
          '<p>' + '<b> Rating </b>' + Rating + '</b>' 
          '</div>';
          FilmListElement.appendChild(FilmElement);
        });
      };
    
      var fallbackResult = function (message) {
        FilmListElement.innerHTML = '';
        FilmListElement.innerHTML += '<h2 class="placeholder">' + message + '</h2>';
      };
    
      buttonSearchElement.addEventListener('click', onButtonSearchClicked);
    };