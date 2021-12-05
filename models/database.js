const { Client } = require('pg')

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: 'Secret60',
  database: 'RNI'
})

client.connect()

module.exports = client
