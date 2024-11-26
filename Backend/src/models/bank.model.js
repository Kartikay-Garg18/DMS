import mongoose from "mongoose";

const bankSchema = new mongoose.Schema({
    accountNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    accountHolder: {
        type: String,
        required: true,
    },
    bankName:{
        type: String,
        required: true,
    },
    ifsc: {
        type: String,
        required: true,
    },
    qrImage: {
        type: String,
    },
    upi : {
        type: String,
    },
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }
});

export const Bank = mongoose.model("Bank", bankSchema);
