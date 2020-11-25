const express = require('express')
const path = require('path')
const data = require('./name_data.json')
const PORT = process.env.PORT || 3001

const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(express.static('public'))

app.use('/random_name', (req, res) =>{
      // console.log(data[0])
      const {first_name} = data[Math.round(Math.random() * data.length)]
      return res.json({first_name})
})

app.use('/', (req, res) => {
      return res.render('index')
})

app.listen(PORT, () =>{
      console.log("Listening on port", PORT)
})