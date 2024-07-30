import Joi from "joi";

const messageVal = Joi.object({
  user: Joi.string().hex().length(24).required(),
  message: Joi.string().required(),
});

export { messageVal };
