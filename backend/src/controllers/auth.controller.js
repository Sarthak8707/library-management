import { loginService, registerService } from "../services/auth.service.js";

export const registerController = async (req, res) => {

    try{
        const {email, password, phoneNumber, role} = req.body;

    const result = await registerService({email, password, phoneNumber, role});
    res.status(201).json({result});
    }
    catch(err){
        res.status(err.statusCode).json({message: err.message});
    }

}


export const loginController = async (req, res) => {

    try{
        const {email, password} = req.body;

    const result = await loginService({email, password});
    res.status(200).json({token: result});
    }
    catch(err){
        res.status(err.statusCode).json({message: err.message});
    }

}
