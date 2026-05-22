-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('APPLIED', 'INTERVIEW', 'REJECTED', 'GHOSTED', 'OFFERED');

-- CreateEnum
CREATE TYPE "WorkMode" AS ENUM ('ONSITE', 'REMOTE', 'HYBRID');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobApplication" (
    "id" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "status" "JobStatus" NOT NULL,
    "mode" "WorkMode" NOT NULL,
    "appliedDate" TIMESTAMP(3) NOT NULL,
    "location" TEXT NOT NULL,
    "salary" TEXT,
    "link" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "JobApplication_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "JobApplication" ADD CONSTRAINT "JobApplication_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
