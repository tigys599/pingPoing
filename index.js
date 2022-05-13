const serverPort = 3000
const express = require("express");
const app = express();
const path = require('path')
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// required to use the router variable which sets the dir to the html file to sendFile method instead of render
const router = express.Router();

// required to run static CSS and JS files
app.use(express.static(__dirname));



router.get('/', function (req, res) {
    // use sendFile method, and the path the file is located
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});

// add in a second argument and pass in router to allow the server to work
app.use('/', router);
app.listen(serverPort, () => {
    console.log(`Listening on ${serverPort}`)
})