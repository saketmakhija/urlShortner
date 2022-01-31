const express = require('express');
const app = express();
const expressEjsLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');
const port = 8000;

app.use(express.urlencoded());
app.use(express.static('./assets'));
app.use(expressEjsLayouts);

//extract style from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

app.use('/', require('./routes'))
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, (err)=>{
    if(err){
        console.log('error in running server ',err);
    }
    console.log('server running on port ',port);
});
