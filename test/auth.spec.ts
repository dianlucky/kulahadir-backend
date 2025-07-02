import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { Logger } from 'winston';
import { AppModule } from '../src/app.module';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { TestModule } from './test.module';
import { TestService } from './test.service';

describe('AuthController', () => {
  let app: INestApplication<App>;
  let logger: Logger;
  let testService: TestService;
  beforeEach(async () => {
    // await testService.deleteUser()
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule, TestModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    logger = app.get(WINSTON_MODULE_PROVIDER);
    testService = app.get(TestService);
  });


  describe('POST /api/auth/login', () => {
    beforeEach(async () => {
      await testService.deleteAll();
      await testService.createAccount();
      const account = await testService.getAccount();
      await testService.createEmployee(account.id);
    });
    it('should be rejected if username or password is incorrect', async () => {
      const result = await request(app.getHttpServer())
        .post('/api/auth/login')
        .send({
          username: 'piring',
          password: '',
        });
      logger.info(result.body);
      expect(result.status).toBe(401);
    });

    it('should be able to login', async () => {
      const result = await request(app.getHttpServer())
        .post('/api/auth/login')
        .send({
          username: 'piring',
          password: 'piring',
        });
      logger.info(result.body);
      expect(result.status).toBe(200);
      expect(result.body).toBeDefined();
    });
  });

  describe('/POST /auth/me', () => {
    it('should be rejected if token is invalid', async () => {
      const result = await request(app.getHttpServer())
        .post('/api/auth/me')
        .set('Authorization', 'boneca ambalabu');

      logger.info(result.body);
      expect(result.status).toBe(401);
    });

    it('should be able to get creds', async () => {
      const result = await request(app.getHttpServer())
        .post('/api/auth/me')
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEyLCJ1c2VybmFtZSI6ImFkaTEyMyIsImlhdCI6MTc1MDgzNDYxMCwiZXhwIjoxNzUxNDM5NDEwfQ.ydlL3tHByctU7DOaPYTl-Y-7vLeJXHGt1fQ8f5OhLJA',
        );
      logger.info(result.body);
      expect(result.status).toBe(200);
      expect(result.body).toBeDefined();
    });
  });

  describe('POST /api/auth/logout', () => {
    it('should be rejected if token is invalid', async () => {
      const result = await request(app.getHttpServer())
        .post('/api/auth/logout')
        .set('Authorization', 'boneca ambalabu');

      logger.info(result.body);
      expect(result.status).toBe(401);
    });

    it('should be able to logout', async () => {
      const result = await request(app.getHttpServer())
        .post('/api/auth/logout')
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEyLCJ1c2VybmFtZSI6ImFkaTEyMyIsImlhdCI6MTc1MDgzNDYxMCwiZXhwIjoxNzUxNDM5NDEwfQ.ydlL3tHByctU7DOaPYTl-Y-7vLeJXHGt1fQ8f5OhLJA',
        );
      logger.info(result.body);
      expect(result.status).toBe(200);
    });
  });
});
