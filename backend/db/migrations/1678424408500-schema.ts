import { MigrationInterface, QueryRunner } from 'typeorm';

export class schema1678424408500 implements MigrationInterface {
  name = 'schema1678424408500';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "${
        process.env.DB_SCHEMA || 'public'
      }"."coffee" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "year" integer NOT NULL, "caffeine_content" real NOT NULL, "caffeine_percentage" real NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4d27239ee0b99a491ad806aec46" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "${
        process.env.DB_SCHEMA || 'public'
      }"."post" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "coffee_id" integer NOT NULL, "text" text NOT NULL, "rating" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "${
        process.env.DB_SCHEMA || 'public'
      }"."post" ADD CONSTRAINT "FK_9faf70fe431b4066b3e76d28c3a" FOREIGN KEY ("coffee_id") REFERENCES "${
        process.env.DB_SCHEMA || 'public'
      }"."coffee"("id") ON DELETE CASCADE ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "${
        process.env.DB_SCHEMA || 'public'
      }"."post" DROP CONSTRAINT "FK_9faf70fe431b4066b3e76d28c3a"`,
    );
    await queryRunner.query(
      `DROP TABLE "${process.env.DB_SCHEMA || 'public'}"."post"`,
    );
    await queryRunner.query(
      `DROP TABLE"${process.env.DB_SCHEMA || 'public'}"."coffee"`,
    );
  }
}
