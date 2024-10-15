import dotenv from "dotenv"

dotenv.config();


export const exports={
    port : process.env.PORT || 3000,
    postgres : process.env.DB_URL_PG,
    secret : process.env.SECRET_KEY,
    mongoUri : process.env.MONGO_URI
}