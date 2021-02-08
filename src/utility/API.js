import axios from "axios";


function getRandomPerson(){
        return axios.get("https://randomuser.me/api/");
    }

export default getRandomPerson;