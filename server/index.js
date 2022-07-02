const express = require("express");
const app = express();
const users = require("./routes/usersRoute");

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
