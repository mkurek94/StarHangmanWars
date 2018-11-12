import axios from 'axios';

export default class Password {

    async getResults() {
        try {
            const res = await axios("https://swapi.co/api/people/");
            this.results = res.data.results;
        } catch (error) {
            console.log(error);
        }
    }
}