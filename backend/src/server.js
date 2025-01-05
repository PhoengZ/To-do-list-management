import "dotenv/config.js";
import "./config/db.js";
import app from "./app.js";

//คีือเชชี่ยไรมะรู้งง
process.on("uncaughtException", (err) => {
    console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
    console.log(err.name, err.message);
    console.log(err.stack);
    process.exit(1);
});
  
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! 💥 Shutting down...");
  console.log(err.name, err.message);
  console.log(err.stack);
  server.close(() => {
    process.exit(1); // Gracefully shut down the server
  });
});
// งง ถึงนี้เลย
const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Backend Server ready at http://localhost:${PORT}`);
});

//app.listen(PORT, "0.0.0.0", () => { ... });
//: Starts the Express server on the specified port (5000) and listens on all available network interfaces (0.0.0.0). 
//The callback function logs a message indicating that the backend server is up and running, 
//and it can be accessed at http://localhost:5000.