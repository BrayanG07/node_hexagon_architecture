import { v4 as uuid } from 'uuid';
import { UserEntity } from './user.entity';
//MAPEA LOS DATOS QUE REPRESENTAN LA ENTIDAD Y VALIDARLOS, LA ENTIDAD ES UNA INTERFACE
//Y ESTA HACE REFERENCIA A LO QUE GUARDAMOS EN LA BASE DE DATOS

export class UserValue implements UserEntity {

    uuid: string;
    name: string;
    email: string;
    description: string;

    // AL CONSTRUCTOR LLEGAN LOS DATOS DE LA SOLICITUD HTTP
    constructor({ name, email, description }: { name: string, email: string, description?:string }) {
        this.uuid = uuid()
        this.name = name;
        this.email = email;
        this.description = description ?? 'default'; // si description es diferente de null que coloque su valor, de lo contrario coloque 'default'
    }

}