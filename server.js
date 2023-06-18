const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connectDatabase = require("./config/database");
const path = require("path");
const http = require("http");
const { Server } = require("socket.io");
// connecting to database
connectDatabase();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "./client/build")));

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POSt"],
  },
});

io.on("connection", (socket) => {
  console.log("User Connected: ", socket.id);

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

const port = process.env.PORT || 5000;

// import routes
const Routes = require("./routes/Route");
app.use("/", Routes);
app.use("*", function (req, res) {
  res.sendfile(path.join(__dirname, "./client/build/index.html"));
});

server.listen(3001 , () => {
  console.log("SERVER RUNNING");
}) 

app.listen(port, () => console.log(`Node server started at port ${port}`));
