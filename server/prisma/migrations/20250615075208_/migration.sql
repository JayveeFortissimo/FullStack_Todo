/*
  Warnings:

  - Added the required column `picture` to the `UserProfile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "UserProfile" ADD COLUMN     "picture" TEXT NOT NULL;
