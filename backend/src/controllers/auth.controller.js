import { loginService, registerService } from "../services/auth.service.js";

export const registerController = async (req, res) => {

    const {email, password, phoneNumber, role} = req.body;

    const result = await registerService({email, password, phoneNumber, role});
    res.status(201).json({result});

}


export const loginController = async (req, res) => {

    const {email, password} = req.body;

    const result = await loginService({email, password});
    res.status(200).json({LoginSuccessful: result});

}
