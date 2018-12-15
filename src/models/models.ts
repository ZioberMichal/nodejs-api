export interface UserModel {
    id: number;
    name: string;
    password?: string;
    email: string;
    roles?: string[];
}
