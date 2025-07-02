import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { Logger } from 'winston';
import { AppModule } from '../src/app.module';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { TestModule } from './test.module';
import { TestService } from './test.service';
import { Account } from '@prisma/client';

describe('EmployeeController', () => {
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

  describe('POST /api/employees', () => {
    beforeEach(async () => {
      await testService.deleteAll();
      await testService.createAccount();
    });
    it('should be rejected if request is invalid', async () => {
      const account: any = await testService.getAccount;
      const result = await request(app.getHttpServer())
        .post('/api/employees')
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjksInVzZXJuYW1lIjoicmlmcWkxMjMiLCJpYXQiOjE3NTA3OTU0ODEsImV4cCI6MTc1MTQwMDI4MX0.Qp6e1ws92fsQf-t5iWT5NdpxQdYPcIvR8NroLifBcU0',
        )
        .send({
          name: '',
          phone: '081231231232',
          birth_date: new Date(),
          account_id: account.id,
        });
      logger.info(result.body);
      expect(result.status).toBe(400);
    });

    it('should be able to create employee', async () => {
      const account = await testService.getAccount();
      const result = await request(app.getHttpServer())
        .post('/api/employees')
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjksInVzZXJuYW1lIjoicmlmcWkxMjMiLCJpYXQiOjE3NTA3OTU0ODEsImV4cCI6MTc1MTQwMDI4MX0.Qp6e1ws92fsQf-t5iWT5NdpxQdYPcIvR8NroLifBcU0',
        )
        .send({
          name: 'beras kering',
          phone: '081231231232',
          birth_date: new Date(),
          account_id: account.id,
        });
      logger.info(result.body);
      expect(result.status).toBe(200);
    });
  });

  describe('GET /api/employees/by-account   ', () => {
    beforeEach(async () => {
      await testService.deleteAll();
      await testService.createAccount();
      const account = await testService.getAccount();
      await testService.createEmployee(account.id);
    });
    it('should be rejected if employee id is not found', async () => {
      const employee = await testService.getEmployee();
      const result = await request(app.getHttpServer())
        .get(`/api/employees/by-account?accountId=${employee.account_id + 1}`)
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjksInVzZXJuYW1lIjoicmlmcWkxMjMiLCJpYXQiOjE3NTA3OTU0ODEsImV4cCI6MTc1MTQwMDI4MX0.Qp6e1ws92fsQf-t5iWT5NdpxQdYPcIvR8NroLifBcU0',
        );
      logger.info(result.body);
      expect(result.status).toBe(200);
      expect(result.body.data).toBe(null);
    });
    it('should be able to get employee', async () => {
      const employee = await testService.getEmployee();
      const result = await request(app.getHttpServer())
        .get(`/api/employees/by-account?accountId=${employee.account_id}`)
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjksInVzZXJuYW1lIjoicmlmcWkxMjMiLCJpYXQiOjE3NTA3OTU0ODEsImV4cCI6MTc1MTQwMDI4MX0.Qp6e1ws92fsQf-t5iWT5NdpxQdYPcIvR8NroLifBcU0',
        );
      logger.info(result.body);
      expect(result.status).toBe(200);
    });
  });

  describe('PATCH /api/employee', () => {
    beforeEach(async () => {
      await testService.deleteAll();
      await testService.createAccount();
      const account = await testService.getAccount();
      await testService.createEmployee(account.id);
    });

    it('should be rejected if data invalid', async () => {
      const employee = await testService.getEmployee();
      const result = await request(app.getHttpServer())
        .patch(`/api/employees/${employee.id + 1}`)
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjksInVzZXJuYW1lIjoicmlmcWkxMjMiLCJpYXQiOjE3NTA3OTU0ODEsImV4cCI6MTc1MTQwMDI4MX0.Qp6e1ws92fsQf-t5iWT5NdpxQdYPcIvR8NroLifBcU0',
        )
        .send({
          name: '',
          phone: '081231231232',
          birth_date: new Date(),
          account_id: employee.account_id,
        });
      logger.info(result.body);
      expect(result.status).toBe(400);
    });

    it('should be able to update employee', async () => {
      const employee = await testService.getEmployee();
      const result = await request(app.getHttpServer())
        .patch(`/api/employees/${employee.id}`)
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjksInVzZXJuYW1lIjoicmlmcWkxMjMiLCJpYXQiOjE3NTA3OTU0ODEsImV4cCI6MTc1MTQwMDI4MX0.Qp6e1ws92fsQf-t5iWT5NdpxQdYPcIvR8NroLifBcU0',
        )
        .send({
          name: 'beras-basah',
          phone: '081231231232',
          birth_date: new Date(),
          account_id: employee.account_id,
        });
      logger.info(result.body);
      expect(result.status).toBe(200);
    });
  });

  describe('DELETE /api/employees', () => {
    beforeEach(async () => {
      await testService.deleteAll();
      await testService.createAccount();
      const account = await testService.getAccount();
      await testService.createEmployee(account.id);
    });

    it('should be rejected if token is invalid', async () => {
      const employee = await testService.getEmployee();
      const result = await request(app.getHttpServer())
        .delete(`/api/employees/${employee.id}`)
        .set('Authorization', 'boneca ambalabu');
      logger.info(result.body);
      expect(result.status).toBe(401);
    });

    it('should be able to delete employee', async () => {
      const employee = await testService.getEmployee();
      const result = await request(app.getHttpServer())
        .delete(`/api/employees/${employee.id}`)
        .set(
          'Authorization',
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjksInVzZXJuYW1lIjoicmlmcWkxMjMiLCJpYXQiOjE3NTA3OTU0ODEsImV4cCI6MTc1MTQwMDI4MX0.Qp6e1ws92fsQf-t5iWT5NdpxQdYPcIvR8NroLifBcU0',
        );
      logger.info(result.body);
      expect(result.status).toBe(200);
    });
  });
});
