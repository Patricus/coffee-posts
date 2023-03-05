import { DataSource, DataSourceOptions } from 'typeorm';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USERNAME || 'coffee_app',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_DATABASE || 'coffee_db',
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/db/migrations/*{.ts,.js}'],
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
