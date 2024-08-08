import app from "./app.js";
import cloudinary from 'cloudinary';


cloudinary.v2.config({
    cloud_name:  process.env.CLOUDINARY_CLIENT_NAME,
    api_key:  process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRETE
})

app.listen(process.env.PORT, () =>{
    console.log(`Server is running at ${process.env.PORT}`);
});