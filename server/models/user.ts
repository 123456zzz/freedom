// eslint-disable-next-line no-unused-vars
import { Schema, model, Document } from "mongoose";

const UserSchema = new Schema({
  createTime: { type: Date, default: Date.now },
  username: {
    type: String,
    trim: true,
    unique: true,
    index: true
  },
  password: String,
  avatarUrl: String
});

interface UserDocument extends Document {
  _id: Schema.Types.ObjectId;
  createTime: Date;
  username: string;
  password: string;
  avatarUrl: string;
}

const User = model<UserDocument>("User", UserSchema);

export default User;
