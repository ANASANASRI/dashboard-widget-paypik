import { Role } from "./role.model";

export interface User{

    id: number;
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    roles?: Role[];
    status:string;
    profilLogoUrl:string;
    email: string;


}