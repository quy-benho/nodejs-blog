const express = require('express');
const morgan =  require('morgan');
const path = require('path') 
const { engine } = require('express-handlebars');

const app = express();
const port = 3000;
// cấu hình file tĩnh
app.use(express.static(path.join(__dirname, 'public')))

//

// http logger
app.use(morgan('combined'))
//template eg
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: "main"}));
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => res.render('home'))
app.get('/', (req, res) => res.render('news'))


console.log("dirname", path.join(__dirname, 'resources/views'))

app.listen(port, () =>  console.log(`Example app listening on port ${port}`))