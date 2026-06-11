import jwt from "jsonwebtoken";

export const signToken = (kuchbhi) => {

    const token = jwt.sign(kuchbhi, "super_secret_key");
    return token;
    
}