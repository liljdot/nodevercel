const express = require("express")

const app = express()

app.use(express.static("pages"))

app.listen(process.env.port || 3000, () => {
    console.log("server is running")
})