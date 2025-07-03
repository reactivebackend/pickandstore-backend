-- AlterTable
ALTER TABLE "User" ADD COLUMN     "aboutMe" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "country" TEXT,
ADD COLUMN     "dateOfBirth" TIMESTAMP(3),
ADD COLUMN     "firstName" TEXT,
ADD COLUMN     "lastName" TEXT;

-- CreateTable
CREATE TABLE "UserAvatar" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "avatarUrl" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deletionStatus" "DeletionStatus" NOT NULL DEFAULT 'NotDeleted',

    CONSTRAINT "UserAvatar_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserAvatar" ADD CONSTRAINT "UserAvatar_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
