const express = require('express');
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function(req, res) {
    res.send('<h1>Hello Stranger!</h1><h2>Type in file path to forward...</h2>');
});

app.use(express.static(__dirname));

app.listen(3000,function (err) {
    if (err) console.log(err);
    console.log('Express listening at port 3000...');
});