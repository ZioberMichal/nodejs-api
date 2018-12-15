import {Body, Controller, Get, Post, Query, Request} from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get()
    getUser(@Query() query: any, @Request() req) {
        return {
            id: 1,
            name: 'Michal',
            query: query,
        };
    }

    @Post()
    postUser(@Body() body: any) {
        return body;
    }
}
