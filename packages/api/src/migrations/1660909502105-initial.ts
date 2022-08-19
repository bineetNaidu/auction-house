import { MigrationInterface, QueryRunner } from 'typeorm';

export class initial1660909502105 implements MigrationInterface {
  public async up(q: QueryRunner): Promise<void> {
    await q.query(`
			CREATE TABLE "users" (
				id SERIAL PRIMARY KEY,
				name VARCHAR NOT NULL,
				google_id VARCHAR(50) NOT NULL,
				avatar VARCHAR(2083) NOT NULL,
				created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
				updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
				UNIQUE(google_id)
			);
		`);

    await q.query(`
				CREATE TABLE "auctions" (
				id SERIAL PRIMARY KEY,
				item_name VARCHAR(255) NOT NULL,
				item_image VARCHAR(2083) NOT NULL,
				has_expired BOOLEAN NOT NULL DEFAULT false,
				expiration_date TIMESTAMP WITH TIME ZONE NOT NULL,
				start_price INTEGER NOT NULL,
				auctionOwnerId INTEGER REFERENCES users(id) ON DELETE CASCADE,
				created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
				updated_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
			);
		`);
  }

  public async down(q: QueryRunner): Promise<void> {
    await q.query(`
			DROP TABLE "users";
		`);

    await q.query(`
			DROP TABLE "auctions";
		`);
  }
}
