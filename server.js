const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('check the app on http://localhost:80/'))

app.listen(80, () => console.log('App listening on port 80'))
