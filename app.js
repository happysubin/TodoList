import "core-js";
import express from "express";
import globalRouter from "./router";
import bodyParser from "body-parser";
import path from "path";
const app = express();

app.set("port", 4000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//
app.use("/static", express.static(path.join(__dirname, "static")));
//이걸해야지 css파일과 연결 가능!!!

app.use(bodyParser.urlencoded({ extended: true }));

const home = () => {
  console.log("success");
};

app.use("/", globalRouter);

app.listen(4000, home);
