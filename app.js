var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

const { importProduct } = require("./utils/utils");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

var CronJob = require("cron").CronJob;
var job1 = new CronJob(
  "* * * * * *",
  function () {
    console.log("You will see this message every second");
    importProduct();
  },
  null,
  false,
  "America/Los_Angeles"
);
// Use this if the 4th param is default value(false)
//job1.start();

var job2 = new CronJob(
  "* * * * * *",
  function () {
    console.log("You will see this another message every second");
  },
  null,
  false,
  "America/Los_Angeles"
);
// Use this if the 4th param is default value(false)
//job2.start();

/*setTimeout(function () {
  console.log("****** STOP JOBS *********");
  job1.stop();
  job2.stop();
}, 5000);*/

module.exports = app;
