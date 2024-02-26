import axios from "axios";

const instance = axios.create({   //creating instance   || should be key:value pairs
    baseURL: "https://api.themoviedb.org/3",  //keys are predefined and case sensitive
})
export default instance