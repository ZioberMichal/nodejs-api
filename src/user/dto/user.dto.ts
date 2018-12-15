import {UserModel} from '../../models/models';

export interface UserRegisterRequestDto {
    name: string;
    password: string;
    email: string;
}

export interface UserRegisterResponseDto {
    user: UserModel;
}

export interface UserLoginRequestDto {
    email: string;
    password: string;
}

export interface UserLoginResponseDto {
    user: UserModel;
    token: string;
}

export interface TokenPayload {
    user: UserModel;
}
