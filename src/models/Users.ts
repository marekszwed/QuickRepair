import { model, models, Schema } from "mongoose";

const userSchema = new Schema(
	{
		name: { type: String, required: true },
		surname: { type: String, required: true },
		email: { type: String, required: true },
		password: { type: String, required: true },
	},
	{
		timestamps: { currentTime: () => Math.floor(Date.now() / 1000) },
	}
);

const User = models.Client || model("Client", userSchema);

export default User;
