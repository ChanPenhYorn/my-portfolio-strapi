// "use strict";

// const cloudinary = require("cloudinary").v2;

// module.exports = (plugin) => {
//   // Override the upload service
//   plugin.providers["@strapi/provider-upload-cloudinary"] = {
//     init(config) {
//       cloudinary.config({
//         cloud_name: config.providerOptions.cloud_name,
//         api_key: config.providerOptions.api_key,
//         api_secret: config.providerOptions.api_secret,
//       });

//       return {
//         async upload(file) {
//           return new Promise((resolve, reject) => {
//             const stream = cloudinary.uploader.upload_stream(
//               { folder: config.actionOptions.upload.folder || "strapi" },
//               (error, result) => {
//                 if (error) return reject(error);

//                 file.provider_metadata = result;
//                 file.url = result.secure_url; // ✅ force Strapi to use Cloudinary URL

//                 resolve();
//               }
//             );

//             stream.end(file.buffer);
//           });
//         },

//         async delete(file) {
//           return cloudinary.uploader.destroy(file.provider_metadata.public_id);
//         },
//       };
//     },
//   };

//   return plugin;
// };
