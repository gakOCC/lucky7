
// Set Bet, Remove if lost bet, etc
function updateBalance(ammount, wL){
    let currentInfo = localStorage.getItem("currentUserInfo");
    let parsedInfo = JSON.parse(currentInfo);
    let username = parsedInfo[0];

    let updatedInfo = [username, ammount];

    let pushInfo = JSON.stringify(updatedInfo);
    localStorage.setItem("currentUserInfo", pushInfo);

    updateLocalStorage(username, ammount, wL);
}

function updateLocalStorage(username, currentBal, wL){
    let storedArrayParse = JSON.parse(localStorage.getItem("storedUsernames"));
    let currentBalanceParse = JSON.parse(localStorage.getItem("currentBalances"));

    let test = [];
    let sum = 0;
    let index;
    for(let i = 0; i < storedArrayParse.length; i++){
        if(username === storedArrayParse[i]){
            index = i;
        }
    }

    if(wL === 1){
        sum = currentBalanceParse[index] + currentBal;
        let push = JSON.stringify(sum);
        localStorage.setItem("currentBalances", push);
    } else {
        sum = currentBalanceParse[index] - currentBal;
        let push = JSON.stringify(sum);
        localStorage.setItem("currentBalances", push);
    }
}

let setUserBet = function setBet(ammount, wL){
    let currentBal = localStorage.getItem("currentUserInfo");
    let parsedInfo = JSON.parse(currentBal);

    let balance = parsedInfo[1];
    let sum = ammount;

    if(wL === 1){
        sum = balance + ammount;
    } else {
        sum = balance - ammount;
    }

    updateBalance(sum, wL)
}

let checkUserBet = function checkBet(ammount){
    let currentBal = localStorage.getItem("currentUserInfo");
    let parsedInfo = JSON.parse(currentBal);

    let balance = parsedInfo[1];
    if(ammount <= balance){
        return 1;
    } else {
        return 0;
    }
}

export {setUserBet, checkUserBet};

