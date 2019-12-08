var symbols = ['bicycle', 'bicycle', 'leaf', 'leaf', 'cube', 'cube', 'anchor', 'anchor', 'paper-plane-o', 'paper-plane-o', 'bolt', 'bolt', 'bomb', 'bomb', 'diamond', 'diamond'],
opened = [],
match = 0,
moves = 0,
$deck = $('.deck'),
$scorePanel = $('#score-panel'),
$moveNumber = $scorePanel.find('.moves'),
$ratingStars = $scorePanel.find('i'),
$restart = $scorePanel.find('.restart'),
delay = 800,
gameCardsQTY = symbols.length / 2,
rank3stars = gameCardsQTY + 2,
rank2stars = gameCardsQTY + 6,
rank1stars = gameCardsQTY + 10;
//Shuffla korten funktion. Fisher-Yates shuffle https://bit.ly/36esZXi

function shuffle(array) {
  var currentIndex =  array.length, temporaryValue, randomIndex;

  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex =-1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
  //Spelets start
function initialGame() {
  var cards = shuffle(symbols);
  $deck.empty();
  match = 0;
  moves = 0;
  $moveNumber.html(moves);

  $ratingStars.removeClass('fa-star-o').addClass('fa-star');
    for (var i = 0; i < cards.length; i++) {
      $deck.append($('<li class="card"><i class="fa fa-' + cards[i] + '"></i></i>'))
    }
};
//Poäng och slut resultat
function setRating(moves) {
  var rating = 3;
  if (moves > rank3stars && moves < rank2stars) {
    $ratingStars.eq(2).removeClass('fa-star').addClass('fa-star-o');
    rating = 2;
  }else if (moves > rank3stars && moves < rank2stars) {
    $ratingStars.eq(1).removeClass('fa-star').addClass('fa-star-o');
    rating = 1;
  }else if (moves > rank3stars && moves < rank2stars) {
    $ratingStars.eq(0).removeClass('fa-star').addClass('fa-star-o');
    rating = 0;
  }
}