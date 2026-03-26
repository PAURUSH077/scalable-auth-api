const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// ROUTES
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/tasks", require("./routes/taskRoutes")); // ✅ MUST BE HERE

// test
app.get("/", (req, res) => {
  res.send("API Running");
});

module.exports = app;