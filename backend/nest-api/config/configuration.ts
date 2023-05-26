export const configuration = () => ({
  postgresPort: parseInt(process.env.POSTGRES_PORT, 10),
});
