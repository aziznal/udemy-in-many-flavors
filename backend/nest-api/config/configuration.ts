export type NestConfig = {
  port: number;
};

export type DbConfig = {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
};

export type EnvConfig = {
  nodeEnv: 'production' | 'development';
  nest: NestConfig;
  db: DbConfig;
  jwtSecret: string;
};

export const configuration = (): EnvConfig => {
  return {
    nodeEnv: process.env.NODE_ENV as 'production' | 'development', // validated in validationSchema so it's okay to cast

    nest: {
      port: parseInt(process.env.NEST_PORT!),
    },

    db: {
      host: process.env.POSTGRES_HOST!,
      port: parseInt(process.env.POSTGRES_PORT!, 10),
      username: process.env.POSTGRES_USERNAME!,
      password: process.env.POSTGRES_PASSWORD!,
      database: process.env.POSTGRES_DB_NAME!,
    },

    jwtSecret: process.env.JWT_SECRET!,
  };
};
