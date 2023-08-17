const express = require("express");
const app = express();
const userRouter = require("./userRouter");
const bodyParser = require("body-parser");

const port = 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.use(bodyParser.json());
app.use("/api/users", userRouter)

app.listen(port, function () {
    console.log('app listening at port %s', port);
});