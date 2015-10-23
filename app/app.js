window.onload = function() {
  document.getElementById('startGame').addEventListener('click', function(){
    startGame();
    makeAndDisplayTiles();
  });
}
function shuffle(o) {
  for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

var tilesArray = [
  '/Users/Adnan/Pokemon-Evolution-Memory-Game/images/bulbasaur.png',
  '/Users/Adnan/Pokemon-Evolution-Memory-Game/images/bulbasaur.png',
  '/Users/Adnan/Pokemon-Evolution-Memory-Game/images/charmander.png',
  '/Users/Adnan/Pokemon-Evolution-Memory-Game/images/charmander.png',
  '/Users/Adnan/Pokemon-Evolution-Memory-Game/images/squirtle.png',
  '/Users/Adnan/Pokemon-Evolution-Memory-Game/images/squirtle.png',
  '/Users/Adnan/Pokemon-Evolution-Memory-Game/images/ivysaur.png',
  '/Users/Adnan/Pokemon-Evolution-Memory-Game/images/ivysaur.png',
  '/Users/Adnan/Pokemon-Evolution-Memory-Game/images/charmeleon.png',
  '/Users/Adnan/Pokemon-Evolution-Memory-Game/images/charmeleon.png',
  '/Users/Adnan/Pokemon-Evolution-Memory-Game/images/wartortle.png',
  '/Users/Adnan/Pokemon-Evolution-Memory-Game/images/wartortle.png',
  '/Users/Adnan/Pokemon-Evolution-Memory-Game/images/venusaur.png',
  '/Users/Adnan/Pokemon-Evolution-Memory-Game/images/venusaur.png',
  '/Users/Adnan/Pokemon-Evolution-Memory-Game/images/charizard.png',
  '/Users/Adnan/Pokemon-Evolution-Memory-Game/images/charizard.png',
  '/Users/Adnan/Pokemon-Evolution-Memory-Game/images/blastoise.png',
  '/Users/Adnan/Pokemon-Evolution-Memory-Game/images/blastoise.png',
  '/Users/Adnan/Pokemon-Evolution-Memory-Game/images/025.png',
  '/Users/Adnan/Pokemon-Evolution-Memory-Game/images/025.png'
];

var container = document.getElementById('game');
var infoDiv = document.getElementById('info');

var startGame = function() {
  tilesArray = shuffle(tilesArray);
};

var makeAndDisplayTiles = function() {
  container.innerHTML = '';
  infoDiv.innerHTML = '';
  for (var i = 0; i < tilesArray.length; i++){
    var makeTile = document.createElement('div');
    makeTile.className = 'column';
    makeTile.setAttribute('data-value', tilesArray[i]);
    makeTile.addEventListener('click', this.makePlay);
    container.appendChild(makeTile);
  }
};

var checkForMatch = function() {
  var tilesClicked = document.getElementsByClassName('clicked');
  if(tilesClicked[0].innerHTML === tilesClicked[1].innerHTML) {
    for(var i = tilesClicked.length - 1; i >= 0; i--) {
      tilesClicked[i].removeEventListener('click', this.makePlay);
      tilesClicked[i].classList.remove('clicked');
    }
    this.checkForWin
  } else {
    window.setTimeout(function(){
      for(var i = tilesClicked.length - 1; i >= 0; i--){
        tilesClicked[i].innerHTML = '';
        tilesClicked[i].classList.remove('found');
        tilesClicked[i].classList.remove('clicked');
          }
        }, 1000);
      }
    };

var checkForWin = function() {
  var allFound = document.getElementsByClassName('found');
  if(allFound.length === 20){
    var youWin = document.createElement('div');
     youWin.innerHTML = 'You Win!'
     infoDiv.appendChild(youWin);
    for(var i = allFound.length - 1; i >= 0; i --){
      allFound[i].classList.add('won');
      allFound[i].classList.remove('found');
    }
  }
};
