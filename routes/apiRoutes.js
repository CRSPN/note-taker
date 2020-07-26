const db = require("../db/db.json")
const fs = require("fs")
function apiRoutes(app)
{
    app.get("/api/notes", function(req, res){
        res.json(db)
    })
    app.post("/api/notes", function(req, res){
        console.log(req.body)
        db.push(req.body)

        fs.writeFile("./db/db.json",JSON.stringify(db), function(err){
                 if(err) throw error
                 
        })
        res.json(db)
    })
}

module.exports = apiRoutes