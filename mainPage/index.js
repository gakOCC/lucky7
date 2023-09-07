import { getUsername } from "../login/login";

let loginContent = document.getElementById("login");

loginContent.innerHTML = getUsername();