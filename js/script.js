let suit = ['clubs', 'spades', 'diamonds', 'hearts'];
let rank = ['jack', 'queen', 'king', 'ace'];
let cards = [];

for(let i = 2; i <= 10; i++){
    for(let j = 0; j < suit.length; j++) {
        cardInformation = `<div class="card-information">${i}<img src="img/${suit[j]}.svg" alt="${suit[j]}"></div>`
        cards.push(`<div class="card">
            ${cardInformation}
            ${cardInformation}
        </div>`);
    }
}

for(let a = 0; a < rank.length; a++) {
    for(let j = 0; j < suit.length; j++) {
        if(rank[a] == "ace") {
          cardInformation = `<div class="card-information">T<img src="img/${suit[j]}.svg" alt="${suit[j]}"></div>`
          cardSpades = `<img class="rank" src="img/${suit[j]}.svg" alt="${suit[j]}">`
        } else {
          cardInformation = `<div class="card-information">${rank[a][0].toUpperCase()}<img src="img/${suit[j]}.svg" alt="${suit[j]}"></div>`
          cardSpades = `<img class="rank" src="img/${rank[a]}.svg" alt="${suit[j]}">`
        }
        cards.push(`<div class="card card-ranks">
            ${cardInformation}
            ${cardSpades}
            ${cardInformation}
        </div>`);

    }
}

let deck = cards.join("");

  document.write(`<div class="container">
    ${deck}
    </div>`);





    // for(let suitCounter = 2; suitCounter <= 10; suitCounter++){
    //   for(let pictureCounter = 0; pictureCounter < suit.length; pictureCounter++) {
    //  cardInformation = `<div class="card-information">${suitCounter}<img src="img/${suit[pictureCounter]}.svg" alt="${suit[pictureCounter]}">`;
    //     cards.push(`<div class="card-information">
    //   ${cardInformation} */}
    // ${cardInformation} */}
    //     </div>`); 
    //   }
    //  }
    
    // document.write(cards.join(`${cardInformation}`));
    
    
    // for(let rankCounter = 1; rankCounter <= 4; rankCounter++){
    //   for(let suit = 0; suit < picture.length; suit++){
    //     cardInformation = `<div class="card-information"> ${rankCounter}<img src="img/${picture[suit]}.svg" alt="${picture[suit]}">`;
    //     cards.push(`<div class="card-information">
    //     ${cardInformation}
    //     ${cardInformation}
    //     </div>`);
    //   }
    // }
    // document.write(cards.join(`${cardInformation}`));
    
    // for(let suitCounter = 2; suitCounter <= 10; suitCounter++){
    //   for(let j = 0; j < suit.length; j++){
    //     cardInformation = `<div class="card-information">${suitCounter}<img src="img/${suit[j]}.svg" alt="${suit[j]}">`;
    //     cards.push(`<div class="card">
    //     ${cardInformation}
    //     ${cardInformation}
    //     </div>`)
    //   }
    // }
    // for(let rankCounter = 1; rankCounter <= 4; rankCounter++){
    //   for(let j = 0; j < picture.length; j++){
    //     cardInformation = `<div class="card-information"> ${rankCounter}<img src="img/${suit[j]}.svg" alt="${suit[j]}"> 
    //     ${rankCounter}<img class="rank" src="img/${picture}.svg" alt="${picture}">`;
    //     cards.push(`<div class="card">
    //     ${cardInformation}
    //     ${cardInformation}
    //     </div>`)
    //   }
    // }
  
    // document.write(`${cardInformation}`);