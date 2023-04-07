const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars').create({extname: '.hbs'});

const DB = require('./services/phone')



app.engine('.hbs', exphbs.engine);
app.set('view engine', '.hbs');
app.use('/static',express.static('static'))
console.log(__dirname);
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());



app.get('/', (req, res)=>{
    res.render('homepage.hbs', {
      layout:null,
      notes: DB.GetAll(),
      add_btn: true,
      disabled: false,
      upd: false
    })
  })
app.get('/update', (req, res)=>{
  res.render('homepage.hbs', {
    layout:null,
    notes: DB.GetAll(),
    disabled: true,
    upd: true,
    add: false
  })
})
app.get('/add', (req, res)=>{
  res.render('homepage.hbs', {
    layout:null,
    notes: DB.GetAll(),
    disabled: true,
    upd: false,
    add: true
  })
})
app.post('/add', (req, res) => {
  DB.Add({fio: req.body.fio, number: req.body.number})
  res.render('homepage.hbs', {
    layout:null,
    notes: DB.GetAll(),
    add_btn: true,
    disabled: false,
    upd: false,
    add: true
  })
})
app.post('/update', (req, res)=> {
  DB.Update({fio:req.body.fio, number: req.body.number})
  res.render('homepage.hbs', {
    layout:null,
    notes: DB.GetAll(),
    add_btn: true,
    disabled: false,
    upd: false,
    add: true
  })
})
app.post('/delete', (req, res) => {
  DB.Delete(req.body.fio)
  res.render('homepage.hbs', {
    layout:null,
    notes: DB.GetAll(),
    add_btn: true,
    disabled: false,
    upd: false,
    add: true

  })
})

app.listen(3000);