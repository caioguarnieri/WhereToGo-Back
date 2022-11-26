import mongoose from "mongoose";

const travelSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  updatedAt: {
    type: Date,
    default: new Date(),
  },
  steps: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Step",
    },
  ],
});

const Travel = mongoose.models.Travel || mongoose.model("Travel", travelSchema);
export default Travel;
