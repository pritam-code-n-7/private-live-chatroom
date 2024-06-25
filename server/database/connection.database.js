import mongoose from "mongoose";

//mongo db connection
export const connectDB = async () => {
  try {
    const ConnectionInstance = await mongoose.connect(
      "mongodb://localhost:27017/chat-app"
    );
    const host = ConnectionInstance.connection.host;
    const port = ConnectionInstance.connection.port;
    console.log(`MongoDB connected :${host}:${port}`);
  } catch (error) {
    console.error("Database connection error", error);
    process.exit(1);
  }
};

