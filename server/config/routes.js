const db = require('../controllers/db.js');

console.log('reached routes');

module.exports = function(app){
   app.get('/test', function(req, res){
      db.test(req,res);
   });
   app.get('/', function(req,res){
      db.index(req,res);
   })
}
