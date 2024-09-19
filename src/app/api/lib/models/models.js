// Importing the necessary modules 
import mongoose from "mongoose";

// Creating the user schema 
const UserSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    emailAddress: { type: String, required: true, unique: true }, 
    password: { type: String, required: true }, 
});

// User connections
const User = mongoose.models.User || mongoose.model('User', UserSchema);

// Exporting the User 
export default User;