import {asyncHandler} from "../utils/asyncHandler.js"
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { Fundraiser } from '../models/fundraiser.model.js';
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const createFundraiser = asyncHandler( async (req, res) => {
    try {
      const user = req.user;
      const bankDetails = req.bankDetails;
      
      const {title, description, targetAmount, endDate, category, beneficiaryName} = req.body;
  
      if([title, description, targetAmount, endDate, category,beneficiaryName].some(field => field?.trim() === "")){
          throw new ApiError(400, "All fields required");
      }

      let beneficiaryImageLocalPath = "";

      if(req.files.beneficiaryImage[0]) beneficiaryImageLocalPath = req.files.beneficiaryImage[0].path;
      
      if(!beneficiaryImageLocalPath) throw new ApiError(400, "Beneficiary image is required");

      const beneficiaryImage = await uploadOnCloudinary(beneficiaryImageLocalPath);

      if(!beneficiaryImage) throw new ApiError(500, "Beneficiary image can't be uploaded");

      const slug = title.toLowerCase().split(" ").join("-")+Date.now();
  
      const fundraiser = await Fundraiser.create({
          title,
          description,
          targetAmount,
          endDate,
          creator: user._id,
          category,
          beneficiaryImage: beneficiaryImage?.url || " ",
          bankDetails: bankDetails._id,
          slug,
          beneficiaryName
      });

      return res.status(200)
      .json( new ApiResponse(200, fundraiser, "Fundraiser created"))

    } catch (error) {
      throw new ApiError(500, error?.message || "Fundraiser can't be created");
    }
  })

const getFundraisers = asyncHandler( async (req, res) => {
    const fundraisers = await Fundraiser.find({});
    console.log(fundraisers);
    return res.status(200)
    .json( new ApiResponse(200, fundraisers, "All fundraisers retrieved"))
})

const getSingleFundraiser = asyncHandler( async (req, res) => {
    const {slug} = req.body;
    const fundraiser = await Fundraiser.findOne({slug}).populate("creator", "name").populate("bankDetails", "accountNumber accountHolder bankName ifsc upi qrImage").sort({createdAt: -1});
    return res.status(200)
    .json( new ApiResponse(200, fundraiser, "Fundraiser retrieved"))
})

export { createFundraiser, getFundraisers, getSingleFundraiser }