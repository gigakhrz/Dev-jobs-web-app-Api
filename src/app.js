import Express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connect from "./DataBase/mongo.js";
import dotenv from "dotenv";

dotenv.config();

connect();

const app = Express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "app working!" });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
