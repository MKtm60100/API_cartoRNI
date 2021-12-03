const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "Secret60",
  database: "RNI",
});

client.connect();

client.query("select * from USERS", (err, res) => {
  if (!err) {
    console.log(res.rows);
  }
  client.end();
});

module.exports = client;
