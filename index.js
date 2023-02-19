
import express from "express"
import bodyParser from "body-parser"
import usersRoute from "./routes/usersRoute.js"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/dbConfig.js"
import corsOptions from './config/corsOptions.js'

const app = express()

app.set(dotenv.config())

const PORT = process.env.PORT || 3000

// CORS Origins
app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Routes
app.use("/auth", usersRoute)

// mongodb connection
connectDB()

// server running
app.listen(PORT, () => {
  console.log(`App is Listining on http://localhost:${PORT}`)
})
