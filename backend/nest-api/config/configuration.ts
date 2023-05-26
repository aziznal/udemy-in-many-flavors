export type DbConfig = {
  host: string;
  port: number;
};

export type EnvConfig = {
  db: DbConfig;
};

export const configuration = (): EnvConfig => {
  return {
    db: {
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
    },
  };
};
