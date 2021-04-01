var express = require('express');
const path = require("path");

const PORT = process.env.PORT || 3000;
console.log(path.resolve("client"));

const server = express()
    .get("/", (req, res) => res.sendFile(path.resolve("client/html/index.html")))
    .use(express.static(path.resolve("client")))
    .listen(PORT, () => console.log("Listening on localhost:" + PORT));