import mongoose from "mongoose";

const MONGO_URI =
  "mongodb+srv://admin:kAuOOf2e7vCyf9MR@mongodbtutorial.9kx8g.mongodb.net/toDoList?retryWrites=true&w=majority";

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log("✅  Connected to DB");
const handleError = (error) =>
  console.log(`❌ Error on DB Connection:${error}`);

db.once("open", handleOpen);

//sudo mongod --dbpath ~/data/db
