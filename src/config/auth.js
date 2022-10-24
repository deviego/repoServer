import "dotenv/config";

export default {
    secret: process.env.APP_SECRET,
    expireIn: "5d"
}