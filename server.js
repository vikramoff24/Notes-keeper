const express = require("express");
const app = express();
const connectDB = require("./config/db");

// Database Connection
connectDB();

//Middleware.
app.use(express.json({ extended: false }));

//Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
