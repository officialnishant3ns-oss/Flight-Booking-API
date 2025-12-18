import app from '../src/app.js'
import dotenv from "dotenv"
dotenv.config({
    path: './.env'
})

app.listen(process.env.PORT ||4000, () => {
    console.log(`Server is ready at ${process.env.PORT}`)
})

app.get('/api/v1', (_, res) => {
    res.send('Welcome to the Flight Booking App')
})