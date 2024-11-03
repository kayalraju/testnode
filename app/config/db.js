

const mongoose=require('mongoose')

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongoDB connected`);
    }catch(error){
        console.log(error);
    }
}

module.exports=connectDB