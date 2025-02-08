import { Bank } from "../models/bank.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const createBank = asyncHandler( async (req, res, next) => {

    const {accountNumber, accountHolder, ifsc, upi, bankName} = req.body;

    if([accountNumber, accountHolder, ifsc, bankName].some(field => field?.trim() === "")){
        throw new ApiError(400, "All fields required");
    }

    const existedBank = await Bank.findOne({accountNumber});

    if(existedBank) throw new ApiError(409, "Bank already exists");

    let qrImageLocalPath = "";

    if(req.files.qrImage[0].path) qrImageLocalPath = req.files.qrImage[0].path;

    let qr = "";

    if(qrImageLocalPath) qr = await uploadOnCloudinary(qrImageLocalPath);

    const bank = await Bank.create({
        accountNumber : accountNumber,
        accountHolder : accountHolder,
        bankName : bankName,
        ifsc : ifsc,
        qrImage : qr?.url || "",
        upi : upi,
        user : req.user._id
    });

    const createdBank = await Bank.findById(bank._id);

    if(!createdBank) throw new ApiError(500, "Bank can't be created");

    req.bankDetails = createdBank;

    next();
    
});

export { createBank }