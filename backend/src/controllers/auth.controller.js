import { loginService, registerService } from "../services/auth.service";

export const registerController = async (req, res) => {

    const {email, password, phoneNumber, role} = req.body;

    const result = await registerService({email, password, phoneNumber, role});
    res.status(201).json({result});

}


export const loginController = async (req, res) => {

    const {email, password} = req.body;

    const result = await loginService({email, password});
    res.json({LoginSuccessful: result});

}
