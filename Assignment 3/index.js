const express = require("express")
require("dotenv").config()

const app = express()

const connectDB = require("./config/db")
const productRoutes = require("./routes/productRoutes")
const { errorMiddleware } = require("./middleware/errorMiddleware")

app.use(express.json())

connectDB()

app.use("/api/products", productRoutes)

app.use(errorMiddleware)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT: ${process.env.PORT}`)
})