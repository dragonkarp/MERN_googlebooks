import axios from "axios"


export default { 
    googleBooks: function(title) {
        console.log(title)
        return axios.get("/api/gbooks/" + title)
        //return axios.get("/api/google/", { params: { q: "title:" + title } }); 
    }
 }