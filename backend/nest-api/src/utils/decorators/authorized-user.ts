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

export const AuthorizedUser = createParamDecorator<never, never, UserTokenPayload>((_data, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<Request & { headers: { authorization?: string } }>();

  if (!request.headers.authorization) return;

  try {
    const tokenPayload = decode(request.headers.authorization.replace('Bearer ', ''));
    return expectedJwtPayload.parse(tokenPayload);
  } catch (e: unknown) {
    throw new UnauthorizedException('bad jwt');
  }
});
