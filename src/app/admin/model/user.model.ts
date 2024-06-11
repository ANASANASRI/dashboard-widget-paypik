import { Role } from "./role.model";

export interface User{

    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    profilLogoUrl: string;
    roles: Role[];
    status: string;

}