import {Body, Controller, ForbiddenException, Get, HttpException, HttpStatus, NotFoundException, Post, Query, Request} from '@nestjs/common';
import {UserLoginRequestDto, UserLoginResponseDto, UserRegisterRequestDto, UserRegisterResponseDto} from '../dto/';
import {UserModel} from '../../models/models';
import {UserService} from '../service/user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService) {
    }

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

    private user: UserModel;

    @Post('register')
    async register(@Body() data: UserRegisterRequestDto): Promise<UserRegisterResponseDto> {
        this.user = {
            id: 1,
            name: data.name,
            email: data.email,
            password: data.password,
        };

        return {user: this.user};
    }

    @Post('login')
    login(@Body() data: UserLoginRequestDto): UserLoginResponseDto {
        if (!this.user) {
            throw new NotFoundException('user not found!');
        }
        if (this.user.password !== data.password || this.user.email !== data.email) {
            throw new ForbiddenException('Wrong!');
        }
        return {
            user: this.user,
            token: this.userService.tokenSign({user: this.user}),
        };
    }
}
