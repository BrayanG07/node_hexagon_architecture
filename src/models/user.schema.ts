import {Schema, model} from "mongoose"

const UserSchema = new Schema(
    {
        name: {
            type: String
        },
        email: {
            type: String,
            unique: true
        },
        description: {
            type: String,
            unique: true
        },
    },
    {
        timestamps: true
    }
);

const UserModel = model("users", UserSchema);

export default UserModel;