-- CreateEnum
CREATE TYPE "ApplicationSource" AS ENUM ('LINKEDIN', 'TELEGRAM');

-- CreateEnum
CREATE TYPE "ApplicationStatus" AS ENUM ('NO_ANSWER', 'WATCHED', 'OFFER');

-- CreateEnum
CREATE TYPE "AnswerAfterInterview" AS ENUM ('NO_ANSWER', 'REFUSE');

-- CreateEnum
CREATE TYPE "InterviewType" AS ENUM ('PRE_SCREEN', 'TECHNICAL');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "recruiter_id" TEXT,
    "company_id" TEXT NOT NULL,
    "applying_date" TIMESTAMP(3) NOT NULL,
    "position" TEXT NOT NULL,
    "source" "ApplicationSource" NOT NULL,
    "status" "ApplicationStatus" NOT NULL,
    "next_inteview_date" TIMESTAMP(3) NOT NULL,
    "current_stage" "InterviewType" NOT NULL,
    "salary" TEXT NOT NULL,
    "link" TEXT NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT,
    "link" TEXT,
    "notes" TEXT,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recruiter" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT,

    CONSTRAINT "Recruiter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interview" (
    "id" TEXT NOT NULL,
    "applicationId" TEXT NOT NULL,
    "type" "InterviewType" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "notes" TEXT,
    "feedback" TEXT,

    CONSTRAINT "Interview_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_recruiter_id_fkey" FOREIGN KEY ("recruiter_id") REFERENCES "Recruiter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_company_id_fkey" FOREIGN KEY ("company_id") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_applicationId_fkey" FOREIGN KEY ("applicationId") REFERENCES "Application"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
