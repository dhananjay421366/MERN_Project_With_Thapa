import { Contact } from "../model/contact.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const contactform = asyncHandler(async (req, res) => {
  try {
    const { username, email, message } = req.body;
    console.log(username,email,message);
    if (!username && !email && !message) {
      throw new ApiError(400, "All fields are required");
    }
    let sendedMsg = await Contact.create({
      username,
      email,
      message,
    });
    if (!sendedMsg) {
      throw new ApiError(400, "Failed to create the message");
    }
    res
      .status(201)
      .json(new ApiResponse(201, sendedMsg, "message sends successfully"));
  } catch (error) {
    throw new ApiError(500, "message not delivered");
  }
});

export { contactform };
