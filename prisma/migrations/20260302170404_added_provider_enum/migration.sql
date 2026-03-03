/*
  Warnings:

  - Changed the type of `providerId` on the `account` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Provider" AS ENUM ('email', 'google', 'github');

-- AlterTable
ALTER TABLE "account" DROP COLUMN "providerId",
ADD COLUMN     "providerId" "Provider" NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "account_providerId_accountId_key" ON "account"("providerId", "accountId");
