const mongoose = require("mongoose");
const CONFIGs = require("./configs");

let dbConnection = null; // singleton database connection
const dbURI = CONFIGs.DATABASE_URL;

const ConnectToDatabase = () => {
  if (!dbConnection) {
    dbConnection = mongoose.connect(dbURI);

    const DATABASE = mongoose.connection;
    DATABASE.on("connected", () => {
      console.log("MONGODB CONNECTED");
    });
    DATABASE.on("error", (error) => {
      console.log("MONGODB CONNECTION ERROR: \n", error);
    });
    DATABASE.on("disconnected", () => {
      console.log("MONGODB DISCONNECTED!");
    });
    DATABASE.on("SIGINT", () => {
      DATABASE.close(() => {
        console.log("MONGODB CONNECTION CLOSED DUE TO APPLICATION TERMINATION");
        process.exit(0);
      });
    });
  }

  return dbConnection;
};

module.exports = {
  ConnectToDatabase,
};
