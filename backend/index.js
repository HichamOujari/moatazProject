const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const app = express();
const cors = require("cors");
const fileSystem = require('fs'),path = require('path');
const uploadFile = require("./controllers/uploadFile")

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(fileUpload());

//const port = process.env.PORT;
const port = 3001;

app.get("/", (req, res) => {
    res.send("welcome to cedoc")
})

app.get("/assets/:path", (req, res) => {
    var filePath = __dirname+"/assets/"+req.params.path;
    res.download(filePath);
})

app.post("/upload", (request, response) => {
    uploadFile(response, request)
})



app.listen(port, () => {
    console.log('app running on port ' + port);
})