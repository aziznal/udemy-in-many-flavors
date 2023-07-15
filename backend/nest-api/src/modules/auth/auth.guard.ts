import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { EnvConfig } from 'config/configuration';
import { RequestWithAuth } from 'src/global-types/request-with-auth.type';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService, private configService: ConfigService<EnvConfig>) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const token = this.#extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('Request failed: Bad token or session expired');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: this.configService.get('jwtSecret'),
      });

      request['user'] = payload;
    } catch {
      throw new UnauthorizedException('Request failed: Bad token or session expired');
    }

    return true;
  }

  #extractTokenFromHeader(request: RequestWithAuth): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];

    return type === 'Bearer' ? token : undefined;
  }
}
