import express from "express";

import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import commentRoutes from "./routes/comment.js"
import likeRoutes from "./routes/likes.js"
const app=express()

//middleware
app.use(express.json())


app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)
app.use("/api/comments", commentRoutes)
app.use("/api/likes", likeRoutes)
app.use("/api/auth", authRoutes)

app.listen(8800, ()=>{
    console.log("API working");
})