// Importing the necessary modules 
import { NextResponse, NextRequest } from "next/server";
import connectToDatabase from "../lib/mongodb";
import User from "../lib/models/models"; 
import bcrypt from 'bcryptjs'; 
import jwt from "jsonwebtoken"; 

// Creating a post route or the Login Page 
const POST = async (req: NextRequest ) => {
    // Connect to the database 
    await connectToDatabase(); 

    // Getting the user login data 
    const userLogins = await req.json(); 

    // Using try catch block for database operations 
    try {
        // Get the user details 
        const user = await User.findOne({
            emailAddress: userLogins.emailAddress
        })

        // If the email address speecified was found on the datatbase, 
        // execute the block of code below 
        if (user) {
            // Get the user password, and the hashpassword 
            const userPassword = userLogins.password; 
            const hashedPassword = user.password; 

            // Checking if the password hashed value is correct 
            const isMatch = bcrypt.compareSync(userPassword, hashedPassword); 

            // Getting the secret key 
            let jwtKey:any = process.env.jwtKey; 
            
            // Checking if the passwords are correct 
            if (isMatch) {
                // Create a JWT Token 
                const token = jwt.sign({
                    email: user.emailAddress, 
                    isLoggedIn: true,
                    id: user._id,
                }, jwtKey, {
                    expiresIn: "30 days"
                }); 

                // Creating the success message/response 
                return NextResponse.json({
                    "message": "Logged in successfully", 
                    "status": "success", 
                    "x-auth-token": token, 
                    "statusCode": 200, 
                })
            }

            // Else if the password did not match 
            else {
                // Create the error message 
                return NextResponse.json({
                    "message": "Invalid email or password", 
                    "status": "error", 
                    "statusCode": 401, 
                })
            }
        }

        // Else if the user is not on the database 
        else {
            // Create the error message 
            return NextResponse.json({
                "message": "Invalid email or password", 
                "status": "error", 
                "statusCode": 401
            })
        }
    }

    // Catch the error 
    catch (error: any) {
        // handle the errors 
        return NextResponse.json({
            message: error.toString().trim(), 
            status: "error", 
            statusCode: 500, 
        }); 

    }
}

// Exporting the route 
export { POST }