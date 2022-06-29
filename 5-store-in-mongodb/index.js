const express = require('express')
const app = express()
require("./mongoose")
const person = require('./Person')

const port = process.env.PORT || 9999;

app.post('/create', async (red, res) => {  // to create some data
    // console.log(person.default)
    const newPerson = new person.default({
        name: 'aryan',
        age: 3432
    })

    const save  = await newPerson.save()

    console.log(save)

    res.send('something')
})

app.get('/data', async (req, res) => {
    const data = await person.default.find({})
    res.json(data)
})


app.listen(port, () => {
    console.log('The Server is up and running on port:', port)
})