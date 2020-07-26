const express = require("express")

const app = express()

const port = process.env.PORT || 3003

app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(express.static("public"))


const apiRoutes = require("./routes/apiRoutes")
apiRoutes(app)
const htmlRoutes = require("./routes/htmlRoutes")
htmlRoutes(app)

app.listen(port, function() {
    console.log("app is listening" + port)
})





