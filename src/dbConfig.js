import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL);

let db = mongoose.connection;
export default db;
