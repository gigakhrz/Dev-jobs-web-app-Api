import { Schema, model } from "mongoose";

const devJobsSchema = new Schema({
  id: {
    type: Schema.Types.Number,
    require: true,
  },
  copmpany: {
    type: Schema.Types.String,
    require: true,
  },
  logo: {
    type: Schema.Types.String,
    require: true,
  },
  logoBackground: {
    type: Schema.Types.String,
    require: true,
  },
  position: {
    type: Schema.Types.String,
    require: true,
  },
  postedAt: {
    type: Schema.Types.String,
    require: true,
  },
  contract: {
    type: Schema.Types.String,
    require: true,
  },
  location: {
    type: Schema.Types.String,
    require: true,
  },
  website: {
    type: Schema.Types.String,
    require: true,
  },
  apply: {
    type: Schema.Types.String,
    require: true,
  },
  description: {
    type: Schema.Types.String,
    require: true,
  },
  requirements: {
    content: {
      type: Schema.Types.String,
      require: true,
    },
    items: {
      type: [Schema.Types.String], //this is array of strings
      require: true,
    },
  },
  role: {
    content: {
      type: Schema.Types.String,
      require: true,
    },
    items: {
      type: [Schema.Types.String], //this is array of strings
      require: true,
    },
  },
});

const DevJobs = model("devJobs", devJobsSchema);

export default DevJobs;
