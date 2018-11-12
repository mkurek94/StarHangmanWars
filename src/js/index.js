import Password from './models/Password';
import * as passwordView from './views/passwordView';
import { DOMList } from './views/base';

const state = {};

const controlPassword = async () => {
    state.password = new Password;

    try {
          await state.password.getResults();
          let word = state.password.results;
          let randWord = word[Math.floor(Math.random() * word.length)];
          passwordView.getPassword(randWord.name);
        } catch(error) {
        console.log(error);
    }
}

const start = () => {
    for (let i = 0; i <= 37; i++) {
        DOMList.key[i].addEventListener("click", passwordView.clickHandler);
    }
    controlPassword();
};


DOMList.button.addEventListener("click", start);
