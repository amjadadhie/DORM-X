-- CreateEnum
CREATE TYPE "Roles" AS ENUM ('PENGHUNI', 'ADMIN');

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Roles" NOT NULL,
    "nama" TEXT NOT NULL,
    "nomorKamar" TEXT NOT NULL,
    "tagihan" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orderRequest" (
    "orderID" SERIAL NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "session" TEXT NOT NULL,
    "petugasKebersihan" TEXT,
    "nomorKamar" TEXT,
    "status" TEXT,
    "notes" TEXT,

    CONSTRAINT "orderRequest_pkey" PRIMARY KEY ("orderID")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_id_key" ON "user"("id");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");

-- CreateIndex
CREATE UNIQUE INDEX "orderRequest_orderID_key" ON "orderRequest"("orderID");
