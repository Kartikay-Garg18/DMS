import mongoose from 'mongoose';
const fundraiserSchema = new mongoose.Schema(
  {
    title:{
      type:String,
      required:[true,"Fundraiser title is required"],
      maxlength:[100],
    },
    description:{
      type:String,
      required:[true,"Description is required"],
      maxlength:[500],
    },
     targetAmount:{
      type:Number,
      required:[true, "Target amount is required"],
      min:[1],
    },
    raisedAmount: {
      type:Number,
      default:0,
      min: [0],
    },
    creator: {
      type:mongoose.Schema.Types.ObjectId,
      ref:'User',
      required:[true, "Creator ID is required"],
    },
    category:{
      type: String,
      enum: ["Medical", "Education", "Animals", "Other"],
      required: [true, "Category is required"],
    },
    startDate:{
      type:Date,
      default:Date.now,
    },
    endDate:{
      type: Date,
      required: [true, "End date is required"],
      validate:{
        validator: function (value) {
          return value > this.startDate;
        },
        message: "End date must be after the start date",
      },
    },
    status:{
      type: String,
      enum: ["Active", "Completed", "Cancelled"],
      default: "Active",
    },
    supporters: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        amount: { type: Number, min: 1 },
        date: { type: Date, default: Date.now },
      },
    ],
  },
  {timestamps: true}
);
export const Fundraiser = mongoose.model('Fundraiser', fundraiserSchema);
