import DevJobs from "../models/DevJobs.js";

export const getAllJob = async (req, res) => {
  try {
    const jobs = await DevJobs.find();
    res.status(201).json(jobs);
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
};
