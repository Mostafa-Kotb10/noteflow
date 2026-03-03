/*
  Warnings:

  - Made the column `passwordHash` on table `account` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "account" ALTER COLUMN "passwordHash" SET NOT NULL;
