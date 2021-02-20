import "core-js";
import "./db";
import express from "express";
import globalRouter from "./router";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import path from "path";
import morgan from "morgan";
import helmet from "helmet";
const app = express();

app.set("port", 8100);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

//
app.use("/static", express.static(path.join(__dirname, "static")));
//이걸해야지 css파일과 연결 가능!!!
app.use(helmet());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const home = () => {
  console.log("success");
};

app.use("/", globalRouter);

app.listen(8100, home);
