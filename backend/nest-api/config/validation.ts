import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production'),

  POSTGRES_PORT: Joi.number().default(5432),
});

