import { UserEntity } from './user.entity';
// UN REPOSITORY ES UNA CAPA DE ABSTRACCION HACE REFERENCIA A LOS METODOS
// QUE SE PODRAN IMPLEMENTAR CON LA CAPA DE DATOS

export interface UserRepository {
    findUserById(uuid: string): Promise<UserEntity | null>;
    registerUser(user:UserEntity): Promise<UserEntity | null>;
    listUser(): Promise<UserEntity[] | null>;
}

// DEFINIMOS TODOS LOS METODOS QUE NO NOS INTERESA CON QUE CAPA O SERVICIO ESTEN
// CONECTANDO, SIMPLEMENTE DEFINIMOS LOS METODOS PARA LO QUE NECESITAMOS