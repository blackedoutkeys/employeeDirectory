import axios from "axios";

export default {
    getRandomPerson: function(){
        return axios.get("https://randomuser.me/api/");
    }
}