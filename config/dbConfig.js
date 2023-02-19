import mongoose from "mongoose"


const connectDB = async () => {
    try{
        mongoose.set("strictQuery", false)
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
        .then(() => console.log("MongoDB connected"))
    }catch(err){
        console.log(err);
    }
}


export default connectDB