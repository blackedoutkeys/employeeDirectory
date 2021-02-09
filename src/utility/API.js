import axios from "axios";


function getRandomPerson(){
        return axios.get("https://randomuser.me/api/?results=100");
    }

export default getRandomPerson;