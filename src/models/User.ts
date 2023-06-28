import mongoose, { Document, Schema } from "mongoose";

interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;

}

const userSchema = new Schema<IUser>({
    username: {
        type: String,
        unique:true,
        required:true,
    },
    email: {
        type: String,
        unique:true,
        required:true,
    },
    password: {
        type: String,
        required:true,
    }
}, {timestamps:true} )

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema)


export default User