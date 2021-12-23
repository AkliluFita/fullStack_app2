import express from "express";
import  mongoose  from "mongoose";
import cors from "cors"
import dotenv from "dotenv"

// import the posts
import postsRoute from './routes/posts.js'

const app = express()
dotenv.config()


// Middleware for data parser $ cors
app.use(express.json({limit:"30mb", extended:"true"}));
app.use(express.urlencoded({limit:"30mb", extended:"true"}));
app.use(cors())

// middleware for route post
app.use('/posts', postsRoute)



const PORT = process.env.PORT || 5000

// mongoose.connect(process.env.CONNECTION_URL,  { useNewUrlParser: true }, {useUnifiedTopology: true})
// .then(() => app.listen(PORT, () => console.log(`the server running on port@: ${PORT}`)))
// .catch((err) => console.log(err))

// mongoose.connect(process.env.CONNECTION_URL)
//     .then(() => console.log('mongo DB connected'))
//     .catch(err =>  console.log(err) )

// mongoose.set('useFindAndModify', false)






// connect to DB
mongoose.connect(process.env.CONNECTION_URL, () => console.log('the DB is connected'))

// listen to the server
app.listen(PORT, () =>  console.log('the server connected'))