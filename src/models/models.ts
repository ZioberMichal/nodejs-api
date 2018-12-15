import { ApiModelProperty } from '@nestjs/swagger';

export class UserModel {
    @ApiModelProperty()
    id: number;
    @ApiModelProperty()
    name: string;
    @ApiModelProperty()
    password?: string;
    @ApiModelProperty()
    email: string;
    @ApiModelProperty()
    roles?: string[];
}
