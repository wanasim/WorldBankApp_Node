const oracledb = require('oracledb');

// NOTE: use the connectString with the ip address for cloud deployment! Otherwise, use localhost for local development
var connAttrs =  {
   user          : "system",
   password      : "Welcome1#",
   connectString : "localhost:1521/PDB1.gse00013232.oraclecloud.internal"
   // connectString : "129.158.70.193:1521/PDB1.gse00013232.oraclecloud.internal"
}

module.exports = {
   test: function(req,res){
      oracledb.getConnection(connAttrs, function(err, connection){
         if (err) {
            console.error("error in connection", err);
            throw err;
         }
         connection.execute("SELECT * FROM WORLD_DEVELOPMENT_INDICATORS", function(err, result){
            if (err) {
               console.error("ran into following error", err);
               res.end("SQL Statement may be jacked up bro. Try reviewing it before you run it! Or it might be the database...or the connection. Good Luck!")

            } else{
               console.log(result.rows);
               res.contentType('application/json').status('200');
               res.send(JSON.stringify(result.rows));
            }});
         });
   },
   index: function(req, res){
      res.send('Please specify specific routes to obtain APIs')
   }
}
