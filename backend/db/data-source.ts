import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = (() => {
  if (process.env.DATABASE_URL) {
    return {
      type: 'postgres',
      url: process.env.DATABASE_URL,
      schema: process.env.DB_SCHEMA || 'public',
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['dist/db/migrations/*{.ts,.js}'],
    } as DataSourceOptions;
  } else {
    return {
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      username: process.env.DB_USERNAME || 'coffee_app',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_DATABASE || 'coffee_db',
      schema: process.env.DB_SCHEMA || 'public',
      entities: ['dist/**/*.entity{.ts,.js}'],
      migrations: ['dist/db/migrations/*{.ts,.js}'],
    } as DataSourceOptions;
  }
})();

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
