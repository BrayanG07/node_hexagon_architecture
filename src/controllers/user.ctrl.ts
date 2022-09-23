import { Request, Response } from "express";
import { registerUser, getDetailsUser } from "../services/user.services";

const insertUser = async ({ body }: Request, res: Response) => {
    const user = await registerUser(body);
    res.send({ user });
};

const getUser = async ({ query }: Request, res: Response) => {
    const { email } = query;
    const user = await getDetailsUser(`${email}`);
    res.send({ user });
};

export { getUser, insertUser };