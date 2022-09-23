/**
 * CAPA INFRAESTRUCTURA CONOCE A MONGO
 */

import { UserEntity } from '../../domain/user.entity';
import { UserRepository } from "../../domain/user.repository";
import UserModel from "../model/user.schema";


const MOCK_USER = {
    name: 'brayan',
    email: 'brayan@correo.com',
    description: 'Hola Mundo',
    uuid: '000-000'
}


/**MYSQL AQUI SE LLAMARIA A UNA TABLA BASE DE DATOS  */
export class MockRepository implements UserRepository {
    
    async findUserById(uuid: string): Promise<any> {
        return MOCK_USER;
    }

    async registerUser(userIn: UserEntity): Promise<any> {
        return MOCK_USER;
    }

    async listUser(): Promise<any> {
        return [MOCK_USER, MOCK_USER, MOCK_USER, MOCK_USER];
    }

}