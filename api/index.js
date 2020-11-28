const express = require('express')

// Create express instance
const app = express()

// Require API routes
const users = require('./routes/users')
const test = require('./routes/test')

// body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// DB
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/nuxtExpressSample', { useNewUrlParser: true, useCreateIndex: true })


// Import API Routes
app.use(users)
app.use(test)

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    console.log(`API server listening on port ${port}`)
  })
}
