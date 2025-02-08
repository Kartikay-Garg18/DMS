import mongoose from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

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
      enum: ["HealthCare", "Education Aid", "Animal Welfare", "Orphan Care","Food Banks","Other"],
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
    supporters: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        amount: { type: Number, min: 1 },
        date: { type: Date, default: Date.now },
      },
    ],
    beneficiaryImage : {
      type: String,
      required: [true, "Beneficiary image is required"],
    },
    bankDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Bank',
      required: [true, "Bank details are required"],
    },
    slug: {
      type: String,
      required: [true, "Slug is required"],
      unique: true
    },
    beneficiaryName : {
      type: String,
      required: [true, "Beneficiary name is required"],
    }
  },
  {timestamps: true}
);

fundraiserSchema.plugin(mongooseAggregatePaginate);

export const Fundraiser = mongoose.model('Fundraiser', fundraiserSchema);
