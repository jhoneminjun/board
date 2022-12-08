const http = require('http');
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
const port = 3002;
const server = http.createServer(app);

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static('public'));

const { mainModule } = require('process');
var db = require('./public/js/db.js');

app.get("/board", function(req,res){
  var sql = 'SELECT * FROM `subway_nonstop`';
  db.query(
    sql, function(err,results,field){
      res.render("billboard", {data : results})
    }
  )
})

// app.get('/', (req, res) => {
//   if (!nonstop.nonStop(req, res)) {  
//     res.redirect('/nonstop');
//     return false;
//   } else {                                      
//     res.redirect('/normal');
//     return false;
//   }
// })

// app.get('/normal', (req, res) => {
//   if (!nonstop.nonStop(req, res)) { 
//     res.redirect('/nonstop');
//     return false;
//   }
// })

// app.get('/nonstop', (req, res) => {
//   if (nonstop.nonStop(req, res)) {  // 로그인 안되어있으면 로그인 페이지로 이동시킴
//     res.redirect('/normal');
//     return false;
//   }
// })

// app.get('/normal', (req, res) => {
//     res.sendFile(__dirname + '/billboard_normal.html')
//   })

// app.get('/nonstop', (req, res) => {
//     res.sendFile(__dirname + '/billboard_nonstop.html')
//   })


  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })