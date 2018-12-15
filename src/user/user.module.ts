import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [UserModule],
  controllers: [UserController],
})
export class UserModule {}