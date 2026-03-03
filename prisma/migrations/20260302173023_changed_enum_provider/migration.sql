/*
  Warnings:

  - The values [email] on the enum `Provider` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Provider_new" AS ENUM ('credentials', 'google', 'github');
ALTER TABLE "account" ALTER COLUMN "providerId" TYPE "Provider_new" USING ("providerId"::text::"Provider_new");
ALTER TYPE "Provider" RENAME TO "Provider_old";
ALTER TYPE "Provider_new" RENAME TO "Provider";
DROP TYPE "public"."Provider_old";
COMMIT;
