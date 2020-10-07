import axios from "axios"


export default { 
    googleBooks: function(title) {
        console.log(title)
        return axios.get("/api/gbooks/" + title)
    }
 }