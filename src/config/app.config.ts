export default () => ({
  enviroment: process.env.NODE_ENV || 'development',
  database: {
    host: process.env.DATABASE_HOST,
    port:
      (process.env.DATABASE_PORT && parseInt(process.env.DATABASE_PORT, 10)) ||
      5432,
  },
});
