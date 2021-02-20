import mongoose from "mongoose";

const toDoSchema = mongoose.Schema({
  task: {
    type: String,
    required: "Write Something",
  },
});

const model = mongoose.model("ToDo", toDoSchema);

export default model;
