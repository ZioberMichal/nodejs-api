import {Body, Controller, Get, Post, Query, Request} from '@nestjs/common';
import {UserRegisterRequestDto, UserRegisterResponseDto} from '../dto/';

@Controller('user')
export class UserController {

    @Get()
    getUser(@Query() query: any, @Request() req) {
        return {
            id: 1,
            name: 'Michal',
            query,
        };
    }

    @Post()
    postUser(@Body() body: any) {
        return body;
    }

    @Post('register')
    register(@Body() data: UserRegisterRequestDto): UserRegisterResponseDto {
        return {
            user: {
                id: 1,
                name: 'Michal',
                email: 'email@email.com',
            },
        };
    }
}
