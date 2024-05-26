let playingCards = document.querySelector(".playing-cards");
let getTextOfButton = document.getElementById("button-text");

let cards = [
  "./assets/imgs/PNG-cards-1.3/2_of_clubs.png",
  "./assets/imgs/PNG-cards-1.3/3_of_clubs.png",
  "./assets/imgs/PNG-cards-1.3/4_of_clubs.png",
  "./assets/imgs/PNG-cards-1.3/5_of_clubs.png",
  "./assets/imgs/PNG-cards-1.3/6_of_clubs.png",
  "./assets/imgs/PNG-cards-1.3/7_of_clubs.png",
  "./assets/imgs/PNG-cards-1.3/8_of_clubs.png",
  "./assets/imgs/PNG-cards-1.3/9_of_clubs.png",
  "./assets/imgs/PNG-cards-1.3/10_of_clubs.png",
  "./assets/imgs/PNG-cards-1.3/jack_of_clubs.png",
  "./assets/imgs/PNG-cards-1.3/queen_of_clubs.png",
  "./assets/imgs/PNG-cards-1.3/king_of_clubs.png",
  "./assets/imgs/PNG-cards-1.3/ace_of_clubs.png",
  "./assets/imgs/PNG-cards-1.3/2_of_diamonds.png",
  "./assets/imgs/PNG-cards-1.3/3_of_diamonds.png",
  "./assets/imgs/PNG-cards-1.3/4_of_diamonds.png",
  "./assets/imgs/PNG-cards-1.3/5_of_diamonds.png",
  "./assets/imgs/PNG-cards-1.3/6_of_diamonds.png",
  "./assets/imgs/PNG-cards-1.3/7_of_diamonds.png",
  "./assets/imgs/PNG-cards-1.3/8_of_diamonds.png",
  "./assets/imgs/PNG-cards-1.3/9_of_diamonds.png",
  "./assets/imgs/PNG-cards-1.3/10_of_diamonds.png",
  "./assets/imgs/PNG-cards-1.3/jack_of_diamonds.png",
  "./assets/imgs/PNG-cards-1.3/queen_of_diamonds.png",
  "./assets/imgs/PNG-cards-1.3/king_of_diamonds.png",
  "./assets/imgs/PNG-cards-1.3/ace_of_diamonds.png",
  "./assets/imgs/PNG-cards-1.3/2_of_spades.png",
  "./assets/imgs/PNG-cards-1.3/3_of_spades.png",
  "./assets/imgs/PNG-cards-1.3/4_of_spades.png",
  "./assets/imgs/PNG-cards-1.3/5_of_spades.png",
  "./assets/imgs/PNG-cards-1.3/6_of_spades.png",
  "./assets/imgs/PNG-cards-1.3/7_of_spades.png",
  "./assets/imgs/PNG-cards-1.3/8_of_spades.png",
  "./assets/imgs/PNG-cards-1.3/9_of_spades.png",
  "./assets/imgs/PNG-cards-1.3/10_of_spades.png",
  "./assets/imgs/PNG-cards-1.3/jack_of_spades.png",
  "./assets/imgs/PNG-cards-1.3/queen_of_spades.png",
  "./assets/imgs/PNG-cards-1.3/king_of_spades.png",
  "./assets/imgs/PNG-cards-1.3/ace_of_spades.png",
  "./assets/imgs/PNG-cards-1.3/2_of_hearts.png",
  "./assets/imgs/PNG-cards-1.3/3_of_hearts.png",
  "./assets/imgs/PNG-cards-1.3/4_of_hearts.png",
  "./assets/imgs/PNG-cards-1.3/5_of_hearts.png",
  "./assets/imgs/PNG-cards-1.3/6_of_hearts.png",
  "./assets/imgs/PNG-cards-1.3/7_of_hearts.png",
  "./assets/imgs/PNG-cards-1.3/8_of_hearts.png",
  "./assets/imgs/PNG-cards-1.3/9_of_hearts.png",
  "./assets/imgs/PNG-cards-1.3/10_of_hearts.png",
  "./assets/imgs/PNG-cards-1.3/jack_of_hearts.png",
  "./assets/imgs/PNG-cards-1.3/queen_of_hearts.png",
  "./assets/imgs/PNG-cards-1.3/king_of_hearts.png",
  "./assets/imgs/PNG-cards-1.3/ace_of_hearts.png",
];

let isShow = false;

function showCards() {
  isShow = !isShow;
  if (isShow) {
    getTextOfButton.innerText = "Hide Cards";
    for (let i = 0; i < cards.length; i++) {
      playingCards.innerHTML += `<div class="box"><img src="${
        cards[i]
      }"><h4>Card ${i + 1}</h4></div>`;
    }
  } else {
    getTextOfButton.innerText = "Show Cards";
    playingCards.innerHTML = ``;
  }
}
