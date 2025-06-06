/*
  Warnings:

  - The primary key for the `Device` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `deviceId` on the `Device` table. All the data in the column will be lost.
  - Changed the type of `id` on the `Device` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `lastActiveDate` on the `Device` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `expirationDate` on the `Device` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropIndex
DROP INDEX "Device_deviceId_key";

-- AlterTable
ALTER TABLE "Device" DROP CONSTRAINT "Device_pkey",
DROP COLUMN "deviceId",
ADD COLUMN     "deletionStatus" "DeletionStatus" NOT NULL DEFAULT 'NotDeleted',
DROP COLUMN "id",
ADD COLUMN     "id" UUID NOT NULL,
DROP COLUMN "lastActiveDate",
ADD COLUMN     "lastActiveDate" TIMESTAMP(3) NOT NULL,
DROP COLUMN "expirationDate",
ADD COLUMN     "expirationDate" TIMESTAMP(3) NOT NULL,
ADD CONSTRAINT "Device_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "Device" ADD CONSTRAINT "Device_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
