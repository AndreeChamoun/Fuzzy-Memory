
var random_images_array = ["/img/Amethyst.png", "/img/Bismuth.png","/img/Chrysocolla.png","/img/Erythrite.png","Euclase.png","/img/Hematite.png","/img/Obsidian.png","Ruby.png","/img/Sapphire.png"];
function getRandomImage(imgAr, path) {
  path = path || 'img/';
  var num = Math.floor( Math.random() * imgAr.length );
  var img = imgAr[ num ];
  var imgStr = '<img src="' + path + img + '" alt = "">';
  document.write(imgStr); document.close();
}

function shuffle(arr) { //fisher-yates shuffling
  var i,
      j,
      temp;
  for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
  }
  return arr;    
};

var cards = ['amethyst','amethyst','bismuth','bismuth','chrysocolla','chrysocolla','erythrite','erythrite','euclase','euclase','hematite','hematite','obsidian','obsidian','ruby','ruby','sapphire','sapphire'.split(',')];
var cardshuffle = shuffle(cards)
const gameContainer = document.querySelector('.game-container');

for (var c in cards) {
  var newElement = document.createElement('div');//skapar
  newElement.id = cards[c]; newElement.className = "cards";
  newElement.innerHTML = cards[c];
  gameContainer.appendChild(newElement);

  var cardBack = document.createElement('div');
cardBack.className = "card-back card-face";//skapar en div inuti "cards" diven
newElement.appendChild(cardBack);

var cardFront = document.createElement('div');
cardFront.className = "card-front card-face";
cardBack.appendChild(cardFront);


//  var img = document.createElement("img");
//  img.src = "/img/Amethyst.png";
//  var src = document.getElementById(".card-front");
//  cardFront.appendChild(img);
}












// let cards = document.querySelector('.cards');

// for (let i = 1; i <= 19; i++) {
//   let cardDiv = document.createElement("cards");
//   if (i%2 === 0) {
//     cardDiv.innerHTML = "<div class=\"cards\">"+ i + "</div>"
//   }else {
//     cardDiv.innerHTML ="<div class=\"cards\">"+ i + "</div>"
//   }
//   cards.appendChild(cardDiv);
// }









// $(document).ready(function(){
//   var array1 = [];
//   var array2 = [];
//   var val=0;
//   var indexBox=-1;

//   for(i=0; i<24; i++){
//     val = 7+(Math.round(Math.random()));
//     console.log(val);
//     array1.push(val);
//     array1.push(val);
//   }

//   for(i=0; i<48; i++){
//     //console.log(Math.round(Math.random()(array1.length-1)));
//     val = Math.round(Math.random()(array1.length-1));
//     array2.push(array1[val]);
//     array1.splice( val, 1);
//   }

//   for(i=0; i<48; i++){
//     $(".game-container div").append('<li><div style="background-position:-'+array2[i]+'px" data-pos='+array2[i]+'></div></li>');
//   }

//   val=0;
//   $(".holder ul li>div").click(function(){
//     $(this).css('opacity','1');
//     $(this).animate({opacity:1},500);

//     if(val==0){
//       val = $(this).data("pos");
//       indexBox = $(this).parent('li').index();
//     }else{
//       if(val == $(this).data("pos")){
//         $('li:eq('+indexBox+')').animate({opacity:0},500);
//         $(this).parent().animate({opacity:0},500);
//       }else{
//         $(this).animate({opacity:0},500);
//         $('li:eq('+indexBox+') div').animate({opacity:0},500);
//       }

//       val=0;
//     }
//   });
// });