import mongoose from "mongoose";
type ConnectionObject = {
    isConnected?: number
}
const connection: ConnectionObject = {}

async function dbConnect() {
    if(connection.isConnected){
        console.log("connected to databse");
        return
    }
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI || '',{})
        connection.isConnected = db.connections[0].readyState
        console.log("db connected succesfully")
    } catch(error){
        console.log("db connecteio failed",error)
       process.exit(1)
    }
}

export default dbConnect;