import { Router } from "express";
import { insertUser, getUser } from "../controllers/user.ctrl";

const route = Router();

/**
 * AQUI RUTA POST HTTP
 */
route.post("/user", insertUser)
route.get("/user", getUser)

export default route