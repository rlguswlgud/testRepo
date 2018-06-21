const express = require('express');

const app = express();

app.listen(80, () => {
    console.log(101)
})

app.get('*', (req, res) => {
    res.send('191')
})