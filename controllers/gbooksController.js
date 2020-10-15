const axios = require("axios")

const googleController = {
    findByTitle: function(req, res) {
        const title = req.params.title
        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + title).then(function(results) {
            res.json(results.data.items)
        })
    }
}



module.exports = googleController
