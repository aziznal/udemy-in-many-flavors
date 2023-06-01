import * as Joi from 'joi';

export const validationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production'),

  NEST_PORT: Joi.number(),

  POSTGRES_HOST: Joi.string(),
  POSTGRES_PORT: Joi.number(),
  POSTGRES_USERNAME: Joi.string(),
  POSTGRES_PASSWORD: Joi.string(),
  POSTGRES_DB_NAME: Joi.string(),

  JWT_SECRET: Joi.string(),
});
