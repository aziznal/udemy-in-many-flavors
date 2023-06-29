import { createParamDecorator, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { decode } from 'jsonwebtoken';
import { z } from 'zod';

const expectedJwtPayload = z
  .object({
    email: z.string().email(),
    iat: z.number(),
    exp: z.number(),
  })
  .required()
  .strict();

export type UserTokenPayload = z.infer<typeof expectedJwtPayload>;

export const TO_MILLISECONDS = 1000;

export const AuthorizedUser = createParamDecorator<never, never, UserTokenPayload>((_data, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<Request & { headers: { authorization?: string } }>();

  if (!request.headers.authorization) return;

  try {
    const rawToken = decode(request.headers.authorization.replace('Bearer ', ''));
    const token = expectedJwtPayload.parse(rawToken);

    if (token.exp * TO_MILLISECONDS < Date.now()) throw new UnauthorizedException('expired jwt');

    return token;
  } catch (e: unknown) {
    throw new UnauthorizedException('bad jwt');
  }
});
