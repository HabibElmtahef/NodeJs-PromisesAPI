const express = require('express')
const cors = require('cors')

const app = express();
app.use(express.json())
app.use(cors())

app.use('/game', require('./routes/gameRoute'))

app.listen(5000, () => {
    console.log('Server Running at PORT 5000')
})