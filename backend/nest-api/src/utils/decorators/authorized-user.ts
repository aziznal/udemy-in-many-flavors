import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { decode } from 'jsonwebtoken';
import { JwtTokenPayload, JwtTokenPayloadSchema } from 'src/global-types/jwt-token-payload.type';

export const TO_MILLISECONDS = 1000;

export const AuthorizedUser = createParamDecorator<never, never, JwtTokenPayload>((_data, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<Request & { headers: { authorization?: string } }>();

  if (!request.headers.authorization) return;

  try {
    const rawToken = decode(request.headers.authorization.replace('Bearer ', ''));
    const token = JwtTokenPayloadSchema.parse(rawToken);

    if (token.exp * TO_MILLISECONDS < Date.now()) throw new UnauthorizedException('expired jwt');

    return token;
  } catch (e: unknown) {
    throw new UnauthorizedException('bad jwt');
  }
});
