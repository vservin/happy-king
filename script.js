let deckId = '';

function getNewDeckOfCards() {
  return fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    .then((resp) => resp.json());
}

function drawACardFromDeck(deckId) {
  return fetch(`https://deckofcardsapi.com/api/deck/${ deckId }/draw/?count=1`)
    .then((resp) => resp.json());
}

getNewDeckOfCards().then((data) => {
  deckId = data.deck_id;
  console.log(data);
  return drawACardFromDeck(deckId);
}).then((dataFromCard) => {
  console.log(dataFromCard);
});
