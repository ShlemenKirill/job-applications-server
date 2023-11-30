/*
  Warnings:

  - You are about to drop the column `nextInteviewDate` on the `Application` table. All the data in the column will be lost.
  - Added the required column `nextInterviewDate` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Application" DROP COLUMN "nextInteviewDate",
ADD COLUMN     "nextInterviewDate" TIMESTAMP(3) NOT NULL;
