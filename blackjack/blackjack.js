function generateRandomNumber(){
    return Math.floor(Math.random() * 11 + 1);
}

let cardArray = [];
let uInfo = document.getElementById("userInfo");
let dInfo = document.getElementById("dealerInfo");


function generateUserCards(){
    let sum = 0;
    for(let i = 0; i < 2; i++){
        cardArray[i] = generateRandomNumber();
        sum += cardArray[i];
    }
    if(sum === 21){
        cardArray = [];
        while(sum === 21){
            for(let i = 0; i < 2; i++){
                cardArray[i] = generateRandomNumber();
                sum += cardArray[i];
            }
        }
    }

    uInfo.innerHTML = sum;
    generateDealerCards();
    console.log(cardArray);
}


/* Dealer Logic */
let dealerCards = [];
function generateDealerCards(){
    let sum = 0;
    for(let i = 0; i < 2; i++){
        dealerCards[i] = generateRandomNumber();
        sum += dealerCards[i];
    }
    if(sum > 21){ // Butt fucking ugly but whatever | I hate fixing bugs
        dealerCards = [];
        while(sum > 21){
            for(let i = 0; i < 2; i++){
                dealerCards[i] = generateRandomNumber();
                sum += dealerCards[i];
            }
        }
    }
    dInfo.innerHTML = sum;
}

function drawDealerCard(){
    /*Here comes the rigged part:) - The house ALWAYS. Wins ;)*/
    let sum = 0;
    for(let i = 0; i < 2; i++){
        sum += dealerCards[i];
    }

    let finalDealerCard = 20;
    while(sum != finalDealerCard){
        sum++;
    }
    return sum;
}

function dealerLogic(){
    let sum = 0;
    for(let i = 0; i < 2; i++){
        sum += dealerCards[i];
    }

    if(dealerCards <= 16){
        sum = drawDealerCard();
        return sum;
    } else {
        return sum;
    }
}



function userCardCheck(){
    let sum = 0;
    for(let i = 0; i < cardArray.length; i++){
        sum += cardArray[i];
    }
    if(sum > 21){
        return "bust";
    } else if(sum === 21){
        return "blackjack";
    }
    return sum;
}

function hitCards(){
    cardArray.push(generateRandomNumber());
    for(let i = 0; i < cardArray.length; i++){
        console.log(cardArray[i]);
    }
    uInfo.innerHTML = userCardCheck();
    dealerLogic();
}

