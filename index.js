const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname,"pages")))

app.get('/hello', (req, res) => {
    res.send("<h1>hello</h1>")
})

app.listen(process.env.PORT || 3000, () => {
    console.log("server is running")
    console.log()
})