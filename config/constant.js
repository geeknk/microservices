import * as dotenv from "dotenv";
dotenv.config();

console.log(process.env.USER_PORT);
console.log(process.env.GATEWAY_PORT);

export default {
    GATEWAY_PORT : process.env.GATEWAY_PORT,
    USER_PORT : process.env.USER_PORT
}