import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { Logger } from 'winston';
import { AppModule } from '../src/app.module';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { TestModule } from './test.module';
import { TestService } from './test.service';

describe('AccountController', () => {
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

  describe('POST /api/accounts', () => {
    beforeEach(async () => {
      await testService.deleteAll();
    });
    it('should be rejected if request is invalid', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/accounts')
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjksInVzZXJuYW1lIjoicmlmcWkxMjMiLCJpYXQiOjE3NTA4MzExMzMsImV4cCI6MTc1MTQzNTkzM30.MRWH93QuPPup81h9yNJUghxlMH6-Qp10kSPlYElAyuE',
        )
        .send({
          username: '',
          password: '',
          level: '',
          status: '',
        });

      logger.info(response.body);
      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });

    it('should be able to create data', async () => {
      const response = await request(app.getHttpServer())
        .post('/api/accounts')
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjksInVzZXJuYW1lIjoicmlmcWkxMjMiLCJpYXQiOjE3NTA4MzExMzMsImV4cCI6MTc1MTQzNTkzM30.MRWH93QuPPup81h9yNJUghxlMH6-Qp10kSPlYElAyuE',
        )
        .send({
          username: 'piring',
          password: 'piring',
          level: 'piring',
          status: 'piring',
        });
      logger.info(response.body);
      expect(response.status).toBe(200);
      expect(response.body.data.username).toBe('piring');
      expect(response.body.data.level).toBe('piring');
      expect(response.body.data.status).toBe('piring');
    });
    it('should be rejected if username already exists', async () => {
      await testService.createAccount();
      const response = await request(app.getHttpServer())
        .post('/api/accounts')
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjksInVzZXJuYW1lIjoicmlmcWkxMjMiLCJpYXQiOjE3NTA4MzExMzMsImV4cCI6MTc1MTQzNTkzM30.MRWH93QuPPup81h9yNJUghxlMH6-Qp10kSPlYElAyuE',
        )
        .send({
          username: 'piring',
          password: 'piring',
          level: 'piring',
          status: 'piring',
        });

      logger.info(response.body);
      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });
  });

  describe('GET /api/accounts', () => {
    beforeEach(async () => {
      await testService.deleteAccount();
      await testService.createAccount();
    });
    it('should be rejected if accountId is not found', async () => {
      const account = await testService.getAccount();
      const response = await request(app.getHttpServer())
        .get(`/api/accounts/${account.id + 1}`)
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjksInVzZXJuYW1lIjoicmlmcWkxMjMiLCJpYXQiOjE3NTA4MzExMzMsImV4cCI6MTc1MTQzNTkzM30.MRWH93QuPPup81h9yNJUghxlMH6-Qp10kSPlYElAyuE',
        );
      logger.info(response.body);
      expect(response.status).toBe(404);
      expect(response.body.errors).toBeDefined();
    });
    it('should be able to get account', async () => {
      const account = await testService.getAccount();
      const response = await request(app.getHttpServer())
        .get(`/api/accounts/${account.id}`)
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjksInVzZXJuYW1lIjoicmlmcWkxMjMiLCJpYXQiOjE3NTA4MzExMzMsImV4cCI6MTc1MTQzNTkzM30.MRWH93QuPPup81h9yNJUghxlMH6-Qp10kSPlYElAyuE',
        );
      logger.info(response.body);
      expect(response.status).toBe(200);
      expect(response.body.data.username).toBe('piring');
      expect(response.body.data.level).toBe('piring');
      expect(response.body.data.status).toBe('piring');
    });
  });

  describe('PATCH /api/accounts', () => {
    beforeEach(async () => {
      await testService.deleteAccount();
      await testService.createAccount();
    });
    it('should be rejected if accountId is not found', async () => {
      const account = await testService.getAccount();
      const response = await request(app.getHttpServer())
        .patch(`/api/accounts/${account.id + 1}`)
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjksInVzZXJuYW1lIjoicmlmcWkxMjMiLCJpYXQiOjE3NTA4MzExMzMsImV4cCI6MTc1MTQzNTkzM30.MRWH93QuPPup81h9yNJUghxlMH6-Qp10kSPlYElAyuE',
        )
        .send({
          level: 'piring-update',
          status: 'piring-update',
        });

      logger.info(response.body);
      expect(response.status).toBe(404);
      expect(response.body.errors).toBeDefined();
    });

    it('should be able to update account', async () => {
      const account = await testService.getAccount();
      const response = await request(app.getHttpServer())
        .patch(`/api/accounts/${account.id}`)
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjksInVzZXJuYW1lIjoicmlmcWkxMjMiLCJpYXQiOjE3NTA4MzExMzMsImV4cCI6MTc1MTQzNTkzM30.MRWH93QuPPup81h9yNJUghxlMH6-Qp10kSPlYElAyuE',
        )
        .send({
          level: 'piring-update',
          status: 'piring-update',
        });

      logger.info(response.body);
      expect(response.status).toBe(200);
    });
  });

  describe('DELETE /api/accounts', () => {
    beforeEach(async () => {
      await testService.deleteAccount();
      await testService.createAccount();
    });
    it('should be rejected id token invalid', async () => {
      const account = await testService.getAccount();
      const response = await request(app.getHttpServer())
        .delete(`/api/accounts/${account.id}`)
        .set('Authorization', 'boneca ambalabu');

      logger.info(response.body);
      expect(response.status).toBe(401);
    });

    it('should be able to delete account', async () => {
      const account = await testService.getAccount();
      const response = await request(app.getHttpServer())
        .delete(`/api/accounts/${account.id}`)
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjksInVzZXJuYW1lIjoicmlmcWkxMjMiLCJpYXQiOjE3NTA4MzExMzMsImV4cCI6MTc1MTQzNTkzM30.MRWH93QuPPup81h9yNJUghxlMH6-Qp10kSPlYElAyuE',
        );
      logger.info(response.body);
      expect(response.status).toBe(200)
      expect(response.body).toBeDefined();
    });
  });
});
