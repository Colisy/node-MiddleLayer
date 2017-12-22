var express = require('express');
var router = express.Router();
var request = require('request');
var qs = require('querystring')
var reqapi1 = function() {
  return new Promise(function(resolve, reject) {
    request({
      method: "get",
      uri: 'http://www.feizhugu.com/index.php/api/index',
      multipart: [{
        'content-type': 'application/json',
        body: "body lalaa"
      }]
    }, function(err, res, body) {
      if (err) {
        reject(err);
      } else {
        // console.log(res.body);
        resolve(res.body);
      }
    })
  })
};
router.get('/', function(req, res, next) {
  res.set({
    "Content-Type": "text/html;charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
    "Access-Control-Allow-Credentials": "true"
  })
  Promise.all([reqapi1()]).then(function(resp) {
    console.log("正常返回数据");
    res.send(resp[0])
  }).catch(function(e) {
    console.log('错误')
    res.send(e)
  })
  // var data = {
  //       rr: '23323',
  //       user2: 'hello'
  //   }
  //   res.send(data)
});
module.exports = router;
