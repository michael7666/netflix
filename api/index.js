const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
// const { Server } = require("socket.io");
const authRouter = require("./route/auth");
const userRouter = require("./route/user");
const movieRouter = require("./route/movies");
const listRouter = require("./route/list");


dotenv.config();


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>console.log("DB connect is successful"))
    .catch((err) =>console.log(err))

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/movies", movieRouter);
app.use("/api/lists", listRouter);




//socket server
// const io = new Server(9900,{ 
//    cors: {
//        origin: "http://localhost:3000", 
//    }
//  });

// io.on("connection", (socket) => {
//  console.log("someone has connected!");

//  socket.on("disconnect", () =>{
//      console.log("someone has left");
//  })
// });


app.listen(9900, () => {
    console.log("Backend server and socket io is running");
});
