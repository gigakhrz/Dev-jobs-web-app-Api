import DevJobs from "../models/DevJobs.js";

export const getAllJob = async (req, res) => {
  try {
    const jobs = await DevJobs.find();
    res.status(201).json(jobs);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};

export const postJobs = async (req, res) => {
  try {
    const data = req.body; // Assuming req.body is an array of objects

    const result = await DevJobs.insertMany(data);
    res.json(result);
  } catch (error) {
    console.log("Can't post");
    res.status(500).json({ error: "An error occurred" });
  }
};
