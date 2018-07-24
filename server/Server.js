const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/contact', (req, res) => {
    console.log(req.body)
    res.status(304).send('done')
})




app.listen(3001, () => console.log('Example app listening on port 3000!'))
