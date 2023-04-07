const express = require('express');
const bodyParser = require('body-parser');
const cargoRouter = require('./routes/cargoRouter');
const transportRouter = require('./routes/transportRouter');
const transportationRouter = require('./routes/transportationRouter');
const clientRouter = require('./routes/clientRouter');
const driverRouter = require('./routes/driverRouter');

const app = express();

const hbs = require('express-handlebars').create({
    extname: '.hbs',
    defaultLayout: 'index',
    layoutsDir: `${__dirname}/views/layouts`,
    partialsDir: `${__dirname}/views/partials`
})

const urlencodedParser = express.urlencoded({extended: false});

app.engine('hbs', hbs.engine);

app.set("view engine", "hbs");

app.set("views", [`${__dirname}/views/`, `${__dirname}/views/cargoPages/`, `${__dirname}/views/clientPages/`, `${__dirname}/views/transportPages/`, `${__dirname}/views/transportationPages/`, `${__dirname}/views/driverPages/`]);

app.use(bodyParser.json());

app.use('/cargo', urlencodedParser, cargoRouter);
app.use('/client', urlencodedParser, clientRouter);
app.use('/transport', urlencodedParser, transportRouter);
app.use('/transportation', urlencodedParser, transportationRouter);
app.use('/driver', urlencodedParser, driverRouter);

app.use('/', (_, response) => {
    response.render('homePage');
})

app.listen(3000);