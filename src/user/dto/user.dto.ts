import { ApiModelProperty } from '@nestjs/swagger';
import {UserModel} from '../../models/models';

export class UserRegisterRequestDto {
    @ApiModelProperty()
    name: string;
    @ApiModelProperty()
    password: string;
    @ApiModelProperty()
    email: string;
}

export class UserRegisterResponseDto {
    @ApiModelProperty()
    user: UserModel;
}

export class UserLoginRequestDto {
    @ApiModelProperty()
    email: string;
    @ApiModelProperty()
    password: string;
}

export class UserLoginResponseDto {
    @ApiModelProperty()
    user: UserModel;
    @ApiModelProperty()
    token: string;
}

export class TokenPayload {
    @ApiModelProperty()
    user: UserModel;
}
