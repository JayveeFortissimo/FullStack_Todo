/*
  Warnings:

  - Added the required column `description` to the `Todo_title` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startDate` to the `Todo_title` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todo_title" ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "startDate" TIMESTAMP(3) NOT NULL;
