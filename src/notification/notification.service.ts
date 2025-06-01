import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/prisma.service';
import { Employee, Notification } from '@prisma/client';
import {
  CreateNotificationRequest,
  NotificationResponse,
  UpdateReadNotificationRequest,
} from 'src/model/notification.model';

@Injectable()
export class NotificationService {
  constructor(private prismaService: PrismaService) {}

  toNotificationResponse(
    notification: Notification & { employee?: Employee },
  ): NotificationResponse {
    return {
      id: notification.id,
      type: notification.type,
      message: notification.message,
      was_read: notification.was_read,
      created_at: notification.created_at,
      employee_id: notification.employee_id,
      employee: notification.employee
        ? {
            id: notification.employee.id,
            name: notification.employee.name,
            birth_date: notification.employee.birth_date,
            phone: notification.employee.phone,
            profile_pic: notification.employee.profile_pic,
            created_at: notification.employee.created_at,
            account_id: notification.employee.account_id,
          }
        : undefined,
    };
  }

  async checkNotificationMustExists(notificationId: number) {
    const result = await this.prismaService.notification.findFirst({
      where: {
        id: notificationId,
      },
      include: {
        employee: true,
      },
    });

    if (!result) {
      throw new HttpException('Notification is not found', 404);
    }

    return result;
  }

  async create(
    request: CreateNotificationRequest,
  ): Promise<NotificationResponse> {
    const result = await this.prismaService.notification.create({
      data: request,
    });

    return this.toNotificationResponse(result);
  }

  async getAllByEmployeeId(
    employeeId: number,
  ): Promise<NotificationResponse[]> {
    const results = await this.prismaService.notification.findMany({
      where: {
        employee_id: employeeId,
      },
      include: {
        employee: true,
      },
    });
    return results.map((result) => this.toNotificationResponse(result));
  }

  async updateRead(
    notificationId: number,
    request: UpdateReadNotificationRequest,
  ): Promise<NotificationResponse> {
    await this.checkNotificationMustExists(notificationId);

    const result = await this.prismaService.notification.update({
      where: {
        id: notificationId,
      },
      data: request,
    });

    return this.toNotificationResponse(result);
  }

  async remove(notificationId: number): Promise<NotificationResponse> {
    await this.checkNotificationMustExists(notificationId);
    const result = await this.prismaService.notification.delete({
      where: {
        id: notificationId,
      },
    });

    return this.toNotificationResponse(result);
  }
}
