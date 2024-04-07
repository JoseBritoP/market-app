-- AlterTable
ALTER TABLE "Order" ADD COLUMN     "canceled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "orderCancelAt" TIMESTAMP(3);
