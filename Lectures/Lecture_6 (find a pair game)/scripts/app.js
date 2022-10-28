

/**Maximal pairs amount */
const MAXIMAL_PAIRS = 12;

/**Amount of cards on the game field. Must be <=24 */
const FIELD_SIZE = 16; 

/** Custom attribute for card's image*/
const data_idx_key = 'data-idx';

/**Cards pairs */
let cards = [];

/**Indexes of clicked cards */
let selected = [];

/** How much time will user see the opened card? Time in ms */
const CARD_SHOWTIME = 500;

/** Opened pairs */
let opened_pairs = 0; 


/** Two selected cards check*/ 
function check(){
    const card_1 = document.querySelector(`[${data_idx_key}="${selected[0]}"]`);
    const card_2 = document.querySelector(`[${data_idx_key}="${selected[1]}"]`)
    if (cards[selected[0]] === cards[selected[1]]){
        card_1.classList.add('checked');
        card_2.classList.add('checked');
        opened_pairs++;
        if (opened_pairs == FIELD_SIZE / 2) {
            alert("Congratulations! You won!");
            opened_pairs = 0;
            start();
        }
    }else{
        card_1.setAttribute('src', './images/blank.png');
        card_2.setAttribute('src', './images/blank.png');
    }
    selected = [];

}

/**Flip the card on click on it */
function flip(){
    const card_index = this.getAttribute(data_idx_key);
    selected.push(card_index);
    this.setAttribute('src', `./images/${cards[card_index]}.png`);
    if (selected.length == 2) {
        setTimeout(check, CARD_SHOWTIME);
    }

}

/**Shuffles array*/
function shuffle_array(array){
    for (let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]]
    }
}


/** Generates the set of cards. Returns array*/
function generate_cards(){
    if(FIELD_SIZE %2 != 0) return
    let indices = Array.from(
        Array(MAXIMAL_PAIRS + 1).keys()
    ).slice(1); //slice [1 : end]
    shuffle_array(indices);
    const pairs = FIELD_SIZE / 2;
    indices = indices.slice(0, pairs);
    indices = indices.concat(indices);
    shuffle_array(indices);
    cards = indices;
}

/**Creates game field */
function create_board(grid){
    if(!grid) return
    for(let i = 0; i < FIELD_SIZE; i++){
        const card = document.createElement('img');
        card.setAttribute('src', './images/blank.png');
        card.setAttribute(data_idx_key, i);
        card.addEventListener('click', flip);
        grid.appendChild(card);
    }
    generate_cards();
}


/** Start and restart function*/
function start(){   
    const grid = document.querySelector('.grid');
    grid.replaceChildren();
    opened_pairs = 0;
    create_board(grid);
}

/** The main function */
function main(){
    start();
}

main();