const express = require('express');
const app = express();
const axios = require("axios")
const parser = require('body-parser')
const { posts } = require('./endpoints')



app.use(parser.urlencoded({ extended: false }))

app.use(parser.json())

//inyeccion de dependencias
const postsHandlers = users({ axios })

app.get('/', postsHandlers.get);


app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});