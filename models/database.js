const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "Secret60",
  database: "RNI",
});

client.connect();
console.log("DB connected");

/*client.query("select * from planning;", (err, res) => {
  if (!err) {
    console.log(res.rows);
  }
  client.end();
});
*/

module.exports = client;
