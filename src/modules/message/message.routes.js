import { Router } from "express";
import { verifyToken } from "../../middleware/verifyToken.js";
import { validate } from "../../middleware/validate.js";
import { messageVal } from "./message.validation.js";
import { addMessage, getMessages } from "./message.controllers.js";

const messageRouter = Router();
messageRouter.post("/", validate(messageVal), addMessage);
messageRouter.get("/", verifyToken, getMessages);

export default messageRouter;
