import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World!' })
})


const PORT = process.env.PORT || 8000;
app.listen(POST, () => {
    console.log(`Server is running on port ${PORT}.`)
});