// Import necessary modules
const express = require("express");
const cors = require("cors");
const CONFIGs = require("./configs/configs");
const { ConnectToDatabase } = require("./configs/mongodb");
const router = require("./routes/routes");

// Create an Express application
const app = express();

// Connecting to MongoDB Database
ConnectToDatabase();

// Middleware to enable CORS
app.use(cors());

// JSON middleware to parse request bodies as JSON
app.use(express.json());

// all routes
app.use("/", router);

// Global Error Handler Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  // Send an error response to the client
  res.status(500).json({
    error: "Something went wrong on the server",
  });
});

// Start the Express server
const port = CONFIGs.PORT;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
