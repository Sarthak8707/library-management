import { User } from "../db/schema.js"
import { signToken } from "../utils/jwt.js";
import { comparePassword, hashPassword } from "../utils/password.js";

export const registerService = async ({email, password, phoneNumber, role}) => {

    const user = await User.findOne({email});

    if(user){
        const error = new Error("User already exists");
        error.statusCode = 409;
        throw error;
    }

    const hashedPassword = await hashPassword(password);

    const newUser = new User({email, hashedPassword, phoneNumber, role});
    await newUser.save();

    return {msg: "Done"};

}

export const loginService = async({email, password}) => {

    const user = await User.find({email});

    if(!user){
        const error = new Error("Username or Password is incorrect");
        error.statusCode = 401;
        throw error;
    }

    const isCorrect = await comparePassword(password, user.password);

    if(!isCorrect){
        const error = new Error("Username or Password is incorrect");
        error.statusCode = 401;
        throw error;
    }

    const token = signToken({id: user._id});
    return token;


}