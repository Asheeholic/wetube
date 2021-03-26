import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is requierd"
  },
  createdAt: {
    type: Date,
    required: Date.now
  }
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
