import { DOMList } from './base';

let password;
let passArray = [];
let hiddenPassword = [];
let fail = 0;

const letters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', ':'
];

export const getPassword = pass => {
    password = pass;
    password = password.toUpperCase();
    passArray = password.split("");
    for (let i = 0; i < password.length; i++) {
        passArray[i] === " " ? (hiddenPassword.push(" ")) : (hiddenPassword.push("_"));
    }
    DOMList.passwordContainer.textContent = hiddenPassword.join("");
};

export const checkLetter = letter => {

    let letterIsTrue = false;

    for (let i = 0; i < password.length; i++) {
        if (password.charAt(i) === letters[letter]) {
            hiddenPassword.splice(i, 1, letters[letter]);
            letterIsTrue = true;
        }
    }
    if (letterIsTrue) {
        document.getElementById(letter).className = 'active';
        DOMList.passwordContainer.textContent = hiddenPassword.join("");
    } else {
        document.getElementById(letter).className = "miss";
        document.getElementById(letter).removeEventListener('click', clickHandler);
        fail++;
        DOMList.hangman.innerHTML = `<img src="img/bg0${fail}.png" alt="background">`;
    }

    //win
    if(hiddenPassword.join("") === passArray.join("")) {
        DOMList.keyboard.innerHTML = `<span>Congratulations! Your character was: ${password}</span><button class="button" onclick="location.reload()">Try again</button>`;
    }

    //loose
    if(fail >= 9) {
        DOMList.keyboard.innerHTML = `<span>Unfortunately, your character was: ${password}</span><button class="button" onclick="location.reload()">Try again</button>`;
    }

};

export const clickHandler = event => {
  checkLetter(event.target.id);
};