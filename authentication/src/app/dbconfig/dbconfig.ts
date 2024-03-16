import mongoose from "mongoose";
export async function Connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("mongodb connected successfully");
    });
    connection.on("error", (error) => {
      console.log(
        "mongodb connection error please make sure mongodb is is running",
        error
      );
      process.exit();
    });
  } catch (error) {
    console.log("error occurs");
    console.log(error);
  }
}
