import { MigrationInterface, QueryRunner } from "typeorm";

export class typeReal1678421612314 implements MigrationInterface {
    name = 'typeReal1678421612314'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "caffeine_content"`);
        await queryRunner.query(`ALTER TABLE "coffee" ADD "caffeine_content" real NOT NULL`);
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "caffeine_percentage"`);
        await queryRunner.query(`ALTER TABLE "coffee" ADD "caffeine_percentage" real NOT NULL`);
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "rating"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "rating" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "post" DROP COLUMN "rating"`);
        await queryRunner.query(`ALTER TABLE "post" ADD "rating" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "caffeine_percentage"`);
        await queryRunner.query(`ALTER TABLE "coffee" ADD "caffeine_percentage" numeric NOT NULL`);
        await queryRunner.query(`ALTER TABLE "coffee" DROP COLUMN "caffeine_content"`);
        await queryRunner.query(`ALTER TABLE "coffee" ADD "caffeine_content" numeric NOT NULL`);
    }

}
