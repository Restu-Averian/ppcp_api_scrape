import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: "dcvolkyfb", // add your cloud_name
  api_key: "632441549471786", // add your api_key
  api_secret: "en0ih6YM8IOrIYlatFGdEYnqpzQ", // add your api_secret
  secure: true,
});

export default cloudinary;
