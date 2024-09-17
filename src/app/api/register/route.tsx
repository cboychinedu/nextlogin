// Importing the necessary modules 
import { NextResponse, NextRequest } from "next/server";

// Creating the post route 
const POST = async (req: NextRequest) => {
    // Getting the data 
    const data = await req.json();
    console.log(data);  

    // Checking the data 
    if (!data) {
        return NextResponse.json({
            "status": "error", 
            "message": "Missing data", 
            "statusCode": 400, 
        }); 
    }

    // Else if the data was found 
    else {
        return NextResponse.json({
            "message": "Data received successfully", 
            "receivedData": data, 
            "statusCode": 200, 
        })
    }

}

// Exporting the POST route 
export { POST }; 