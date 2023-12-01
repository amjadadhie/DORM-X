-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('PENGHUNI', 'ADMIN');

-- CreateTable
CREATE TABLE "User" (
    "ID" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Roles" NOT NULL,
    "nama" TEXT NOT NULL,
    "nomorKamar" TEXT NOT NULL,
    "tagihan" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("ID")
);

-- CreateTable
CREATE TABLE "OrderRequest" (
    "orderID" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "session" TEXT NOT NULL,
    "petugasKebersihan" TEXT,
    "nomorKamar" TEXT,
    "status" TEXT,
    "notes" TEXT,

    CONSTRAINT "OrderRequest_pkey" PRIMARY KEY ("orderID")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");
