const express = require("express");
const hbs = require("express-handlebars");
const { clientsRouter } = require("./routers/client");
const { homeRouter } = require("./routers/home");
const { db } = require("./utils/db");

const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));
app.use(express.json());
// this.app.use(cookieParser());

app.engine(
  ".hbs",
  hbs({
    extname: ".hbs",
    //    helpers: handlebarsHelpers
  })
);
app.set("view engine", ".hbs");

app.use("/", homeRouter);
app.use("/client", clientsRouter);

app.listen(3000, "localhost", () => {
  console.log("listening on port 3000");
});
