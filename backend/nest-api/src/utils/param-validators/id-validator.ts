import { BadRequestException } from '@nestjs/common';
import { z } from 'zod';

// returns true if given id is a valid uuid
export function validateUUID(potentialUuid?: string): boolean {
  try {
    z.string().uuid().parse(potentialUuid);
    return true;
  } catch (e: unknown) {
    throw new BadRequestException('id must be valid uuid');
  }
}
