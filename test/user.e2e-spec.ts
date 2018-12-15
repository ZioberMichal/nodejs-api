import {HttpStatus, INestApplication} from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { UserModule } from '../src/user/user.module';
import {UserLoginRequestDto, UserLoginResponseDto, UserRegisterRequestDto, UserRegisterResponseDto} from '../src/user/dto';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  const userPath = '/user';
  it(userPath + ' (GET)', () => {
    const resBody = {
        id: 1,
        name: 'Michal',
        query: {},
    };
    return request(app.getHttpServer())
      .get(userPath)
      .expect(200)
      .then(res => {
        expect(res.body).toMatchObject(resBody);
      });
  });

  it(userPath + ' (POST)', () => {
      const resBody = {
          id: 1,
          name: 'Michal',
          query: {},
      };
      return request(app.getHttpServer())
          .post(userPath)
          .send(resBody)
          .expect(201)
          .then(res => {
              expect(res.body).toMatchObject(resBody);
          });
    });

  const userRegisterUrl = '/user/register';
  it(userRegisterUrl + ' (POST)', () => {
      const req: UserRegisterRequestDto = {
          name: 'Michal',
          password: 'password',
          email: 'email@email.com',
      };
      const response: UserRegisterResponseDto = {
          user: {
              id: 1,
              name: 'Michal',
              email: 'email@email.com',
          },
      };
      return request(app.getHttpServer())
          .post(userRegisterUrl)
          .send(req)
          .expect(201)
          .then(res => {
              expect(res.body).toMatchObject(response);
          });
  });

  const loginUrl = '/user/login';
  it(loginUrl + ' (POST)', () => {
      const req: UserLoginRequestDto = {
          password: 'password',
          email: 'email@email.com',
      };
      const response: UserLoginResponseDto = {
          user: {
              id: 1,
              name: 'Michal',
              email: 'email@email.com',
          },
          token: expect.any(String),
      };

      return request(app.getHttpServer())
          .post(loginUrl)
          .send(req)
          .expect(201)
          .then(res => {
              expect(res.body).toMatchObject(response);
          });
  });
  it(loginUrl + ' FORBIDDEN (POST)', () => {
      const req: UserLoginRequestDto = {
          password: 'wrong',
          email: 'email@email.com',
      };

      return request(app.getHttpServer())
          .post(loginUrl)
          .send(req)
          .expect(HttpStatus.FORBIDDEN);
  });
});
