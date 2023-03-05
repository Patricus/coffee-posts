import { MigrationInterface, QueryRunner } from "typeorm";

export class default1678004828275 implements MigrationInterface {
    name = 'default1678004828275'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "coffee" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "year" integer NOT NULL, "caffeine_content" numeric NOT NULL, "caffeine_percentage" numeric NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_4d27239ee0b99a491ad806aec46" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "post" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "coffee_id" integer NOT NULL, "text" text NOT NULL, "rating" numeric NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "coffeeId" integer, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_59844822dea45b6800a62ddde83" FOREIGN KEY ("coffeeId") REFERENCES "coffee"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_59844822dea45b6800a62ddde83"`);
        await queryRunner.query(`DROP TABLE "post"`);
        await queryRunner.query(`DROP TABLE "coffee"`);
    }

}
