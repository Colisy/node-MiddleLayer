var express = require('express');
var nunjucks = require('nunjucks');
var index = require('./router/index');
var jsonApi = require('./router/json')
var data = require('./router/data')
var app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app
});


app.use('/', index);
app.use('/json', jsonApi);
app.use('/data', data);
app.listen(3000,function(){
  console.log('正在启动....')
})

module.exports = app;
