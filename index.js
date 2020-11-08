const express = require('express')
const showdata = require('./showdata')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/', (request, response) => {
  // eslint-disable-next-line no-undef
  return response.render('index', { showdata }) // ./views/index.pug
})

app.get('/season/:id', (request, response) => {
  const season = showdata.seasons.find((season) => season.number === parseInt(request.params.id))

  return response.render('seasonpage', { season, showdata })
})


app.all('*', (request, response) => {
  // return response.status(404).send();
  return response.sendStatus(404)
})

app.listen(1337, () => {
  console.log('Listening on port 1337...')
})

