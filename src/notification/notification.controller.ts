import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { NotificationService } from './notification.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Auth } from 'src/common/auth.decorator';
import { Account } from '@prisma/client';
import { WebResponse } from 'src/model/web.model';
import {
  CreateNotificationRequest,
  NotificationResponse,
  UpdateReadNotificationRequest,
} from 'src/model/notification.model';

@Controller('/api/notifications')
export class NotificationController {
  constructor(private notificationService: NotificationService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  @HttpCode(200)
  async create(
    @Auth() account: Account,
    @Body() request: CreateNotificationRequest,
  ): Promise<WebResponse<NotificationResponse>> {
    const result = await this.notificationService.create(request);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  @HttpCode(200)
  async getByEmployeeId(
    @Auth() account: Account,
    @Query('employeeId', ParseIntPipe) employeeId: number,
  ): Promise<WebResponse<NotificationResponse[]>> {
    const result =
      await this.notificationService.getAllByEmployeeId(employeeId);
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/:notificationId')
  @HttpCode(200)
  async update(
    @Auth() account: Account,
    @Param('notificationId', ParseIntPipe) notificationId: number,
    @Body() request: UpdateReadNotificationRequest,
  ): Promise<WebResponse<NotificationResponse>> {
    request.id = notificationId;
    const result = await this.notificationService.updateRead(
      notificationId,
      request,
    );
    return {
      data: result,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/:notificationId')
  @HttpCode(200)
  async remove(
    @Auth() account: Account,
    @Param('notificationId', ParseIntPipe) notificationId: number,
  ): Promise<WebResponse<boolean>> {
    await this.notificationService.remove(notificationId);
    return {
      data: true,
    };
  }
}
