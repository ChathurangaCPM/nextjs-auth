import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('connected DB...')
    } catch (error) {
        console.log('error', error);
    }
}
export default connectDB;