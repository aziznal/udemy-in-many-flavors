import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './modules/auth/auth.guard';
import { AuthorizedUser } from './utils/decorators/authorized-user';
import { JwtTokenPayload } from './global-types/jwt-token-payload.type';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('secure-hello')
  @UseGuards(AuthGuard)
  getSecureHello(@AuthorizedUser() user: JwtTokenPayload): string {
    return `this is a secure hello to the user with email ${user.email}`;
  }
}
