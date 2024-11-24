import {asyncHandler} from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import {User} from "../models/user.model.js"

const generateToken = async (userId) => {
    try {
        const user = await User.findById(userId);
        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;

        await user.save({validateBeforeSave : false});

        return {accessToken, refreshToken};

    } catch (error) {
        throw new ApiError(500, "Token can't be generated");
    }
}

const registerUser = asyncHandler( async (req, res) => {
    const { name, email, password, phoneNumber } = req.body;

    if([name, email, password, phoneNumber].some(field => field?.trim() === "")){
        throw new ApiError(400, "All fields required");
    }

    const existedUser = await User.findOne({email})

    if(existedUser) throw new ApiError(409, "User already exists");

    const user = await User.create({
        name : name,
        email : email,
        password : password,
        phoneNumber : phoneNumber
    })

    const createdUser = await User.findById(user._id).select("-password -refreshToken");

    if(!createdUser) throw new ApiError(500, "User can't be created");

    return res.status(200)
    .json( new ApiResponse(200, createdUser, "User created"))
})

const loginUser = asyncHandler( async (req, res) => {
    const {email, password} = req.body;

    if(!email) throw new ApiError(409, "Please enter email")

    const user = await User.findOne({email})

    if(!user) throw new ApiError(400, "User doesn't exist")

    const isPasswordCorrect = await user.isPasswordCorrect(password)

    if(!isPasswordCorrect) throw new ApiError(401, "Incorrect password");

    const {accessToken, refreshToken} = await generateToken(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    const options = {
        httpOnly : true,
        secure : true
    }

    return res.status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
        new ApiResponse(200, {
            user : loggedInUser, accessToken, refreshToken
        }, "Logged In Successfully")
    )
})

const logoutUser = asyncHandler( async (req, res) => {
    await User.findByIdAndUpdate(req.user._id,
        {
            $set : {
                refreshToken : undefined
            }
        },
        {
            new : true
        }
    )

    const options = {
        httpOnly : true,
        secure : true
    }

    return res.status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(
        new ApiResponse(200, {}, "User logged out")
    )
})

const refreshAccessToken = asyncHandler( async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken
    if(!incomingRefreshToken) throw new ApiError(401, "Unauthorized request");

    try {
        const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET);
    
        const user = await User.findById(decodedToken?._id);
    
        if(!user) throw new ApiError(401, "Invalid refresh Token");
    
        if(incomingRefreshToken !== user?.refreshToken){
            throw new ApiError(411, "Refresh Token is Expired or used")
        }
    
        const options = {
            httpOnly : true,
            secure : true
        }
    
        const {accessToken, refreshToken} = await generateToken(user._id);
    
        return res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(
            new ApiResponse(200, {accessToken, refreshToken}, "Access Token Refreshed")
        )
    } catch (error) {
        throw new ApiError(404, error?.message || "Invalid token message")
    }

})

const changePassword = asyncHandler (async (req, res) => {
    const {oldPassword, newPassword, confPassword} = req.body;

    if(newPassword !== confPassword){
        throw new ApiError(401, "Password doesn't match");
    }

    const user = await User.findById(req.user?._id);

    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword);

    if(!isPasswordCorrect){
        throw new ApiError(400, "Invalid Password");
    }

    user.password = newPassword
    await user.save({validateBeforeSave : false});

    return res.status(200).json(new ApiResponse(200, {}, "Password changed successfully"));
})

const getCurrentUser = asyncHandler( async (req, res) => {
    return res.status(200).json(200, req.user, "Get current user");
})

export {registerUser, loginUser, logoutUser, refreshAccessToken, changePassword, getCurrentUser};