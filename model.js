import mongoose from "mongoose";

const toDoSchema = mongoose.Schema({
  task: {
    type: String,
    required: "Write Something",
  },
});

const model = mongoose.model("ToDo", toDoSchema); //ToDo가 todo로 바뀐것일까?

export default model;
