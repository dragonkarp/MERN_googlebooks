import axios from "axios"


export default { 
    getSearchResults: () => {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=:id")
    }
 }