import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const userName: string = process.env.DB_USERNAME as string;
const password: string = process.env.DB_PASSWORD as string;

export default async function connect(): Promise<typeof mongoose> {
  return mongoose.connect(
    `mongodb+srv://${userName}:${password}@userscluster.1xvtwas.mongodb.net/?retryWrites=true&w=majority`
  );
}
