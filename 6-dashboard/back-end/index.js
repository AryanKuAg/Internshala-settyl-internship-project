const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(cors())

const port = process.env.PORT || 1234;


app.get('/', (req, res) => {
    res.json({
        labels: ['Thing 1', 'Thing 2', 'Thing 3', 'Thing 4', 'Thing 5', 'Thing 6'],
        datasets: [
          {
            label: '# of Votes',
            data: [2, 9, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      })    
})


app.listen(port, () => {
    console.log('The server is up and running on PORT:', port)
})