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

    @Get('register')
    getRegister() {
        return '<form action="/user/register" method="post"><input type="text" name="name" placeholder="Name"><input type="text" name="email" placeholder="Email"><input type="submit"></form>';
    }

    @Post('register')
    async register(@Body() data: UserRegisterRequestDto): Promise<UserRegisterResponseDto> {
        const user = {
            user: {
                id: 1,
                name: data.name,
                email: data.email,
            },
        };

        return delay(2, user);
    }
}

function delay(time = 2, data: UserRegisterResponseDto): Promise<UserRegisterResponseDto> {
    return new Promise((resolve, reject) => {
        if (time > 2) {
            reject('TOO LONG!');
        } else {
            setTimeout(() => {
                resolve(data);
            }, time * 1000);
        }
    });
}
