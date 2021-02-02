const mongoose = require('mongoose')
const express = require('express')
const session = require('express-session')
const MongoDBStore = require('connect-mongodb-session')(session)
const cors = require('cors')


// personal files
const router = require('./router/router')


// database uri
const url = 'mongodb://localhost:27017/test'


// store for session tracking
const store = new MongoDBStore({
  uri: url,
  collection: 'sessions'
})

// express session settings
const settings = {
  secret: 'IgbaraLenu',
  resave: false,
  saveUninitialized: true,
  unset: 'destroy',
  store: store,
  name: 'no name for now'
}

const app = express()

// middle ware
app.use(cors())
app.use(express.json())
app.use(session(settings))
app.use(router)




// database connection
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(result => app.listen(3000, ()=> console.log('app running on port 3000')))
  .catch(err => console.log(err))