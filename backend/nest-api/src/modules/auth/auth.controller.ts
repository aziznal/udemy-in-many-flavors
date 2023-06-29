import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './auth.guard';
import { RequestWithAuth } from 'src/global-types/request-with-auth.type';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('verify')
  @UseGuards(AuthGuard)
  verify(@Req() req: RequestWithAuth) {
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) return false;

    return this.authService.verifyToken(token);
  }
}
