const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');



cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.CLOUDAPI_KEY,
  api_secret: process.env.CLOUDAPI_SECRET,
});


const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'wanderlust_DEV', 
      allowedFormat: ['jpeg', 'png', 'jpg'], 
    },
  });

  module.exports = {
    cloudinary,
    storage,
  };