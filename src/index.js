const express = 
require('express');
const morgan = 
require('morgan');
const path = 
require('path');
const { engine } =
 require('express-handlebars');
const app = 
express();
const port = 3000;
const route = 
require('./routes');

// cấu hình file tĩnh
app.use(express.static(path.join(__dirname, 'public')));

// sử dụng middelware lấy body trong
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// XMLhttpreq fetch axios

// http logger
// app.use(morgan('combined'))
//template eg
app.engine('hbs', engine({ extname: '.hbs', defaultLayout: 'main' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//route init
route(app);
app.listen(port, () => console.log(`Example app listening on port ${port}`));
