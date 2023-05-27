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
  nest: NestConfig;
  db: DbConfig;
};

export const configuration = (): EnvConfig => {
  return {
    nest: {
      port: parseInt(process.env.NEST_PORT),
    },

    db: {
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      username: process.env.POSTGRES_USERNAME,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB_NAME,
    },
  };
};
