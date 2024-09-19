// Importing the necessary modules 
import mongoose from "mongoose";

// Creating the user schema 
// Creating the user schema 
const UserSchema = new mongoose.Schema({
    fullname: String, 
    emailAddress: String, 
    password: String, 
});

// Creating the user's collection 
const USER = mongoose.model('users', UserSchema);

// Exporting the modules 
export { USER }