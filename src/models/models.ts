import { ApiProperty } from '@nestjs/swagger';

export class UserModel {
    @ApiProperty()
    id: number;
    @ApiProperty()
    name: string;
    @ApiProperty()
    password?: string;
    @ApiProperty()
    email: string;
    @ApiProperty()
    roles?: string[];
}
