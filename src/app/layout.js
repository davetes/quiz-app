// app/layout.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css"; // Import global styles

export const metadata = {
  title: "Quiz App",
  description: "A fun and interactive quiz app for multiple subjects!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
