var express = require('express');
const path = require("path");

const PORT = process.env.PORT || 3000;
console.log(path.resolve("client"));

const server = express()
    .get("/", (req, res) => res.sendFile(path.resolve("client/html/index.html")))
    .get("/nl", (req, res) => res.sendFile(path.resolve("client/html/versionDutch.html")))
    .get("/eng", (req, res) => res.sendFile(path.resolve("client/html/versionEnglish.html")))
    .use(express.static(path.resolve("client")))
    .listen(PORT, () => console.log("Listening on localhost:" + PORT));