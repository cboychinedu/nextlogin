// Importing the necessary modules 
import { NextResponse, NextRequest } from "next/server";

// Creating a post route or the Login Page 
const POST = async (req: NextRequest ) => {
    // Getting the user login data 
    const userLogins = await req.json(); 

    // Checking if the data is valid 
    if (!userLogins) {
        // Return an error message 
        return NextResponse.json({
            "status": "error", 
            "message": "Missing data", 
            "statusCode": 400, 
        }); 
    }

    // Else if the data was found, execute the 
    // block of code below 
    else {
        return NextResponse.json({
            "message": "User login verified", 
            "status": "success", 
            "statusCode": 200, 
        })
    }
}

// Exporting the route 
export { POST }