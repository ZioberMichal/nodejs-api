import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import {TokenPayload} from '../dto';

describe('UserService', () => {
  let service: UserService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();
    service = module.get<UserService>(UserService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  it('should decode the token', () => {
    const payload: TokenPayload = {
      user: {
        id: 1,
        name: 'Michal',
        email: 'email@email.com',
      },
    };
    const token = service.tokenSign(payload);
    expect(typeof token).toBe('string');
    expect(service.tokenDecode(token)).toMatchObject(payload);
  });
});
