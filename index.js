const express = require('express');
const app = express();
var cors = require('cors');
const port = process.env.PORT || 5000;


const chef = require('./data/chef.json');


app.use(cors());


app.get('/', (req, res) => {
    res.send('Chef hub page is running')
})

app.get('/chef', (req, res) => {
    res.send(chef)
})

app.listen(port, () => {
    console.log(`Chef hub API is running on port: ${port}`)
})