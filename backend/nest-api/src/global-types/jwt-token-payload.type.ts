import { z } from 'zod';

export const JwtTokenPayloadSchema = z
  .object({
    email: z.string().email(),
    isInstructor: z.boolean(),
    iat: z.number(),
    exp: z.number(),
  })
  .required()
  .strict();

export type JwtTokenPayload = z.infer<typeof JwtTokenPayloadSchema>;
