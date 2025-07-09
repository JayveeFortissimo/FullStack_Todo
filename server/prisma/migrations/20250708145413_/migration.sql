/*
  Warnings:

  - Added the required column `userId` to the `Todo_title` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Todo_title" ADD COLUMN     "userId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Todo_title" ADD CONSTRAINT "Todo_title_userId_fkey" FOREIGN KEY ("userId") REFERENCES "UserProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
