import { Message } from "../../../database/models/message.model.js";
import { catchError } from "../../middleware/catchError.js";

const addMessage = catchError(async (req, res) => {
  let message = await Message.insertMany(req.body);
  res.status(201).json({ message: "Success", message });
});

const getMessages = catchError(async (req, res) => {
  let messages = await Message.find({ user: req.user.userId });
  let msgs = messages.map((msg) => msg.message);
  res.json({ message: "success", msgs });
});
export { addMessage, getMessages };
