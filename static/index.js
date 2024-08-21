const multer = require('multer');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/',(req, res) => {
    res.sendFile(__dirname + '/' + index.html);
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/' + about.html);
});

app.get('/blog', (req, res) => {
    res.sendFile(__dirname + '/' + blog.html);
});

app.get('/upload', (req, res) => {
    res.sendFile(__dirname + '/' + upload.html);
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/' + contact.html);
});

const port = process.env.PORT || 9001;
app.listen(port, () => {
    console.log(`Listening at port ${port}`)
});

