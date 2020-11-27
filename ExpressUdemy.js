const express = require('express')
const app = express()

app.get('/', (req, res) => {
    console.log('Func 0')
})

app.get('/', (req, res) => {
    console.log("Func 1")
    res.status(200).send("Meu Backend!")
})