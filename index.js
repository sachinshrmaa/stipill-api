import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import route from "./Routes/route.js"
import dotenv from "dotenv"
const PORT = process.env.PORT || 3000
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/auth", route)
app.set(dotenv.config())
mongoose.set("strictQuery", false)
mongoose
  .connect(`${process.env.MONGO_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connection Successful"))
  .catch((error) => console.log(error))

app.listen(3000, () => {
  console.log(`App is Listining on http://localhost:3000/${PORT}`)
})
