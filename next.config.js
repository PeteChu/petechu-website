const path = require("path");

module.exports = {
    swcMinify: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    images: {
        domains: ["res.cloudinary.com"],
    },
};
