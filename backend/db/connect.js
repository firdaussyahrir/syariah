import mongoose, { connect } from "mongoose";


const connectMongoDB = async() => {
    try {
        await connect("mongodb+srv://syariah:portal@cluster0.9z3cf.mongodb.net/");
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1);
    }
}

export default connectMongoDB;
