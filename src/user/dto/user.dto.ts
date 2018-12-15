import {UserModel} from '../../models/models';

export interface UserRegisterRequestDto {
    name: string;
    password: string;
    email: string;
}

export interface UserRegisterResponseDto {
    user: UserModel;
}
