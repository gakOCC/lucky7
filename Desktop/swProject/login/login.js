let loginForm = document.getElementById("login");
const loginButton = document.getElementById("loginButton");
const registerButton = document.getElementById("registerButton");

// Oh so scary consts
// Use two Arrays, and push back to that array when registar?
let usernames = ["admin"];
let passwords = ["test123"];


let index1;
let index2;
loginButton.addEventListener("click", (event) =>{
    event.preventDefault();
    let username = loginForm.uNameE.value;
    let password = loginForm.pWordE.value;
    for(let j = 0; j < usernames.length; j++){
        if(username === usernames[j]){
            index1 = j;
        }  
    }

    for(let i = 0; i < passwords.length; i++){
        if(password === passwords[i]){
            index2 = i;
        }
        console.log("h");
    }

    console.log(index1, index2);
    if(index1 === index2){
        alert("logged in");
    } else {
        console.log("fuck");
    }
    index1 = 0; index2 = 0;
})

registerButton.addEventListener("click", (event)=>{
    event.preventDefault();
    let username = loginForm.uNameE.value;
    let password = loginForm.pWordE.value;
    if(usernames.includes(username)){
        alert("Username already taken");
    } else {
        usernames.push(username);
        passwords.push(password);
        console.log(usernames, passwords);
    }
})
