const express = require("express");
const app = express();
const mongoose = require("mongoose");
const users = require("./routes/usersRoute");
require("dotenv").config();

// Connect to DB
try {
  mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (e) {
  console.log(e.message);
}

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/users", users);

app.get("/", (req, res) => {
  res.status(200).json({ message: `This is the main route` });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
