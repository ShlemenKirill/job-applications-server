/*
  Warnings:

  - You are about to drop the column `company_id` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `current_stage` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `next_inteview_date` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `recruiter_id` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `user_id` on the `Application` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `User` table. All the data in the column will be lost.
  - Added the required column `companyId` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `currentStage` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nextInteviewDate` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Application` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_company_id_fkey";

-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_recruiter_id_fkey";

-- DropForeignKey
ALTER TABLE "Application" DROP CONSTRAINT "Application_user_id_fkey";

-- AlterTable
ALTER TABLE "Application" DROP COLUMN "company_id",
DROP COLUMN "current_stage",
DROP COLUMN "next_inteview_date",
DROP COLUMN "recruiter_id",
DROP COLUMN "user_id",
ADD COLUMN     "companyId" TEXT NOT NULL,
ADD COLUMN     "currentStage" "InterviewType" NOT NULL,
ADD COLUMN     "nextInteviewDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "recruiterId" TEXT,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "first_name",
DROP COLUMN "last_name",
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_recruiterId_fkey" FOREIGN KEY ("recruiterId") REFERENCES "Recruiter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
