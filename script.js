let deckId = '';
let remainingCards ='52';

function getNewDeckOfCards() {
  return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then((resp) => resp.json());
}

function drawACardFromDeck(deckId) {
  return fetch(`https://deckofcardsapi.com/api/deck/${ deckId }/draw/?count=1`)
    .then((resp) => resp.json());
}


document.getElementById('card').addEventListener('click',function(){

  if(remainingCards === 0){
    document.getElementById('card').src = 'https://www.latercera.com/resizer/GU5p9M9URqdx51nSyBWjIoO2Vzo=/900x600/smart/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/OOPGZQS4GNB6XJ4TYPEOST7J6E.jpg';
    setTimeout(() => location.reload(),5000);
    return; 
  }

  if(deckId === ''){
    newDeckAndDrawOneCard();
  }
  else {
    drawACardFromDeck(deckId).then((dataFromCard) =>{
      console.log(dataFromCard);
      remainingCards=dataFromCard.remaining;
      document.getElementById('card').src = dataFromCard.cards[0].image ;
    });
  }

});

function newDeckAndDrawOneCard(){
  getNewDeckOfCards().then((data) => {
    deckId = data.deck_id;
    console.log(data);
    return drawACardFromDeck(deckId);
  }).then((dataFromCard) => {
    console.log(dataFromCard);
    // console.log(dataFromCard.cards[0].image);
    // let img = document.createElement('img'); 
    // img.src = dataFromCard.cards[0].image; 
    document.getElementById('card').src = dataFromCard.cards[0].image ;
  });
}




// function hola() {
//   console.log("Hola caracola");
// }

