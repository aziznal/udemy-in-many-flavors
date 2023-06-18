import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from './modules/auth/auth.guard';
import { JwtService } from '@nestjs/jwt';

@Controller()
export class AppController {
  constructor(private appService: AppService, private jwtService: JwtService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('secure-hello')
  @UseGuards(AuthGuard)
  getSecureHello(@Req() req: Request): string {
    const token = req.headers['authorization']?.split(' ')[1];

    const decodedToken = this.jwtService.decode(token) as { email: string };

    return `this is a secure hello to the user with email ${decodedToken.email}`;
  }
}
