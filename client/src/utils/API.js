import axios from "axios"


export default { 
    getRandomPeople: () => {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=:id")
    }
 }