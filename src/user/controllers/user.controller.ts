import {Controller, Get} from '@nestjs/common';

@Controller('user')
export class UserController {

    @Get()
    getUser() {
        return {
            id: 1,
            name: 'Michal',
        };
    }
}
