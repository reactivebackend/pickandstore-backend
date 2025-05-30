-- CreateEnum
CREATE TYPE "DeletionStatus" AS ENUM ('NotDeleted', 'Deleted');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "deletionStatus" "DeletionStatus" NOT NULL DEFAULT 'NotDeleted',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserMetadata" (
    "userId" INTEGER NOT NULL,
    "emailConfirmationCode" VARCHAR(255),
    "emailConfirmationExpiration" TIMESTAMP(3),
    "isEmailConfirmed" BOOLEAN NOT NULL DEFAULT false,
    "passwordRecoveryCode" VARCHAR(255),
    "passwordRecoveryExpiration" TIMESTAMP(3),

    CONSTRAINT "UserMetadata_pkey" PRIMARY KEY ("userId")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Device" (
    "id" SERIAL NOT NULL,
    "deviceId" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "lastActiveDate" INTEGER NOT NULL,
    "expirationDate" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Device_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Device_deviceId_key" ON "Device"("deviceId");

-- AddForeignKey
ALTER TABLE "UserMetadata" ADD CONSTRAINT "UserMetadata_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
