const express = require('express')
const app = express()

var port = process.env.PORT || 8080;

app.use(express.static('src'));

app.listen(port, function () {
  console.log('Listening on port ' + port + '!')
})


