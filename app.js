const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/indexController')
const usersRouter = require('./routes/usersController')
const uniteRouter = require('./routes/uniteController')
const planningRouter = require('./routes/planningController')
const optionRouter = require('./routes/optionController')
const creneauRouter = require('./routes/creneauController')
const client = require('./models/database')
const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/planning', planningRouter)
app.use('/creneau', creneauRouter)
app.use('/option', optionRouter)
app.use('/unite', uniteRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

client.query('select * from users;', (err, res) => {
  if (!err) {
    console.log(res.rows)
  }
  client.end()
})

module.exports = app
