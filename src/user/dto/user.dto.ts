import { ApiProperty } from '@nestjs/swagger';
import {UserModel} from '../../models/models';

export class UserRegisterRequestDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    password: string;
    @ApiProperty()
    email: string;
}

export class UserRegisterResponseDto {
    @ApiProperty()
    user: UserModel;
}

export class UserLoginRequestDto {
    @ApiProperty()
    email: string;
    @ApiProperty()
    password: string;
}

export class UserLoginResponseDto {
    @ApiProperty()
    user: UserModel;
    @ApiProperty()
    token: string;
}

export class TokenPayload {
    @ApiProperty()
    user: UserModel;
}
