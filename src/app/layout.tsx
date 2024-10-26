// Importing the necessary modules 
import type { Metadata } from "next";
import { Poppins } from 'next/font/google'; 
import "./globals.css";

// Configure the font object 
const poppins = Poppins({
  subsets: ['latin'], 
  display: 'swap', 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
})

// Exporting the metadata 
export const metadata: Metadata = {
  title: "Login User test",
  description: "Boilerplace for the login user",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
