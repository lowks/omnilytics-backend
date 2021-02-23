const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");
const router = require("./routes/routes")();

const port = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", router);
app.use('/static', express.static(path.join(__dirname, 'public')))

const server = app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});

module.exports = {app, server};
