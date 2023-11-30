/*
  Warnings:

  - You are about to drop the column `applying_date` on the `Application` table. All the data in the column will be lost.
  - Added the required column `applyingDate` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" DROP COLUMN "applying_date",
ADD COLUMN     "applyingDate" TIMESTAMP(3) NOT NULL;
