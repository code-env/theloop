import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    // Your API request logic here
    try {
      // Make the request to the external API
      const response = await fetch("https://zenquotes.io/api/today");
      const data = await response.json();

      // Return the data to the client
      return NextResponse.json(data);
    } catch (error) {
      // Handle errors appropriately
      console.error(error);
      //   return (500).json({ message: "Internal Server Error" });
    }
  } catch (error) {}
}
