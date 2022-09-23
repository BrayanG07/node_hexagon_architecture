import UserModel from "../models/user.schema";
import { UserInterface } from '../types/user.type';


/**
 * REGISTRAR USUARIO
 * @param user 
 * @returns 
 */
const registerUser = async (user: UserInterface) => {
    const response = await UserModel.create(user);
    return response;
}

/**
 * CONSULTAR USUARIO
 * @param email 
 * @returns 
 */
const getDetailsUser = async (email: string) => {
    const response = await UserModel.findOne({email})
    return response;
}

export { registerUser, getDetailsUser };