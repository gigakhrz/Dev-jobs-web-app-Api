import Express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connect from "./DataBase/mongo.js";
import dotenv from "dotenv";
import {
  getAllJob,
  getJobsBySizeAndPage,
  postJobs,
} from "./controllers/devJobs-controller.js";

dotenv.config();

connect();

const app = Express();
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.status(200).json({ message: "app working!" });
});

app.get("/getAll", getAllJob);

app.post("/postjob");

app.post("/postJobs", postJobs);

app.get("/jobs/:size/:page", getJobsBySizeAndPage);

app.listen(process.env.PORT || 3001, () => {
  console.log("server is running on port 3001");
});
