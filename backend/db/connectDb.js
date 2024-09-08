import mongoose from "mongoose"


export const connectDb= async()=>{
    try {
        const con =await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongodb connected : ${con.connection.host}`);
        
    } catch (error) {
        console.log("Error Connection To Mongodb",error.message);
        process.exit(1)  //1 is failure , 0 status code is success
        
        
    }
}