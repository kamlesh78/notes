const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/notes',  {useNewUrlParser: true})
  .then(()=> console.log("connected to database"))
  .catch((err)=>console.log(err));

const users = require('./routes/users');

app.set('view engine','pug');
app.set('views','./views');


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/users',users);

app.get('/',(req,res)=>{
	res.render('index');

});



app.listen(9004);