const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes/index');

app.use(express.static(path.join(__dirname, 'public')));
// add post(body) to middleware to print client's value in webserver
// use urlencode() for form and express.json to handle javasc

app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

// show clients's HTTP
app.use(morgan('combined'));

//template engine
app.engine('handlebars', handlebars.engine({ extname: '.handlebars' }));
app.set('view engine', 'handlebars');
app.set('views', './src/resources/views');
console.log('PATH: ', path.join(__dirname, 'resources\\views\\layouts'));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port at http://localhost:${port}`);
});
