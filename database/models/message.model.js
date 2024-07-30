import { model, Schema } from "mongoose";

const schema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: { updatedAt: false },
    versionKey: false,
  }
);

export const Message = model("Message", schema);
