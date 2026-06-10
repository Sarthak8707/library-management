import jwt from "jsonwebtoken";

export const signToken = (id) => {

    const token = jwt.sign(id, "super_secret_key");
    return token;
    
}