import mongoose from "mongoose";


export const dbConnection = () =>{
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "MERN_STACK_JOB_SEEKING"
    }).then(() =>{
        console.log("Databse Connected Successfully");
    })
    .catch((error) => {
          console.log("Some error occured")
          console.log(error);
    })
}