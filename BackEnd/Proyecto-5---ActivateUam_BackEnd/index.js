const EXPRESS = require("express")
const MONGOOSE = require("mongoose");
const APP = EXPRESS();
const ROUTES_APP = require("./routes");
const passport = require('passport');
const cors = require('cors');

require("dotenv").config();


APP.listen(process.env.CONNECTION_PORT, () => {
  console.log(`Listening port ${process.env.CONNECTION_PORT}`)
});

MONGOOSE.set("strictQuery", false);

MONGOOSE.connect(process.env.DATABASE_CONNECTION_STRING, { family: 4 })
  .then(() => console.log("successful conection"))
  .catch((err) => console.log(err));

APP.use(EXPRESS.json());
APP.use(cors({
  origin: '*'
}));
ROUTES_APP(APP);
