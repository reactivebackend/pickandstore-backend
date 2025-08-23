-- CreateEnum
CREATE TYPE "PaymentStatus" AS ENUM ('Confirmed', 'Pending');

-- CreateEnum
CREATE TYPE "SubscriptionPeriod" AS ENUM ('DAY', 'WEEK', 'MONTH');

-- CreateEnum
CREATE TYPE "PaymentSystem" AS ENUM ('STRIPE', 'PAYPAL', 'CREDIT_CARD');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "hasActiveSubscription" BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE "AvailableSubscription" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "period" "SubscriptionPeriod" NOT NULL,

    CONSTRAINT "AvailableSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SubscriptionTransactions" (
    "id" SERIAL NOT NULL,
    "subscriptionId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "externalTransactionId" TEXT,
    "paymentSystem" "PaymentSystem" NOT NULL,
    "status" "PaymentStatus" NOT NULL DEFAULT 'Pending',
    "paymentDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "url" TEXT,

    CONSTRAINT "SubscriptionTransactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserSubscription" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "subscriptionId" INTEGER NOT NULL,
    "transactionId" INTEGER NOT NULL,
    "subscriptionStartDate" TIMESTAMP(3) NOT NULL,
    "subscriptionEndDate" TIMESTAMP(3) NOT NULL,
    "nextPaymentDate" TIMESTAMP(3),
    "autoRenewal" BOOLEAN NOT NULL DEFAULT true,
    "notified" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserSubscription_transactionId_key" ON "UserSubscription"("transactionId");

-- AddForeignKey
ALTER TABLE "SubscriptionTransactions" ADD CONSTRAINT "SubscriptionTransactions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SubscriptionTransactions" ADD CONSTRAINT "SubscriptionTransactions_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "AvailableSubscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSubscription" ADD CONSTRAINT "UserSubscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSubscription" ADD CONSTRAINT "UserSubscription_subscriptionId_fkey" FOREIGN KEY ("subscriptionId") REFERENCES "AvailableSubscription"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserSubscription" ADD CONSTRAINT "UserSubscription_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "SubscriptionTransactions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
