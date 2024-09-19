// Importing the necessary modules 
import { NextResponse, NextRequest } from "next/server";
import connectToDatabase from "../lib/mongodb"; 
import User from "../lib/models/models";
import bcrypt from 'bcryptjs'; 

// Creating the post route 
export const POST = async (req: NextRequest) => {
    // Connect to the database
    await connectToDatabase();

    // Getting the data from the request
    const data = await req.json();

    // Using try-catch block for database operations
    try {
        // Find user by email address
        const user = await User.findOne({
            emailAddress: data.emailAddress
        });

        // If the user exists, return error response
        if (user) {
            return NextResponse.json({
                message: "The user with the email address is already registered", 
                status: "user-registered-error", 
                statusCode: 409
            });
        }

        // If the email was not found, proceed with registration
        else {
            // Encrypt the password
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = bcrypt.hashSync(data.password, salt);

            // Saving the new user
            const newUser = new User({
                fullname: data.fullname,
                emailAddress: data.emailAddress,
                password: hashedPassword,
            });

            // Save the user to the database
            await newUser.save();

            // Return success response
            return NextResponse.json({
                message: "User registered successfully", 
                status: "success",
                statusCode: 201
            });
        }

    } catch (error: any) {
        // Handle any errors
        return NextResponse.json({
            message: error.toString().trim(),
            status: "error",
            statusCode: 500
        });
    }
}
