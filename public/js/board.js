var db = require('./db.js')

module.exports = {
  nonStop: function (request, response) {
    var sql = 'SELECT * FROM `subway_nonstop`';
    db.query(sql, function (err, results, fields) {
      if (results.some(el=>el.conges == '매우혼잡')==true) {
        return true;
      } else {
        return false;
      }
    })
  }
}

  