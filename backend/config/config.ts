module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: +process.env.PORT || 5432,
  username: process.env.DB_USERNAME || 'coffee_app',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'coffee_db',
  synchronize:
    process.env.NODE_ENV !== ('production' || 'staging') ? true : false,
  entities: ['src/models/*.ts'],
  migrations: ['src/database//migrations/*.ts'],
  cli: {
    entitiesDir: 'src/models',
    migrationsDir: 'src/database/migrations',
  },
};
