/*
  Warnings:

  - You are about to drop the column `acceped` on the `service` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `user` table. All the data in the column will be lost.
  - You are about to drop the `gambar_service` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `roles` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `service_jenis_kerusakan` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `accepted` to the `service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_service` to the `service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role_id` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "service_jenis_kerusakan" DROP CONSTRAINT "service_jenis_kerusakan_id_jenis_kerusakan_fkey";

-- DropForeignKey
ALTER TABLE "service_jenis_kerusakan" DROP CONSTRAINT "service_jenis_kerusakan_id_service_fkey";

-- DropForeignKey
ALTER TABLE "user" DROP CONSTRAINT "user_role_fkey";

-- AlterTable
ALTER TABLE "service" DROP COLUMN "acceped",
ADD COLUMN     "accepted" BOOLEAN NOT NULL,
ADD COLUMN     "id_service" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" DROP COLUMN "role",
ADD COLUMN     "role_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "gambar_service";

-- DropTable
DROP TABLE "roles";

-- DropTable
DROP TABLE "service_jenis_kerusakan";

-- CreateTable
CREATE TABLE "role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_detail" (
    "id" SERIAL NOT NULL,
    "id_service" TEXT NOT NULL,
    "id_jenis_kerusakan" INTEGER NOT NULL,
    "foto_before" TEXT NOT NULL,
    "foto_after" TEXT NOT NULL,

    CONSTRAINT "service_detail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_detail" ADD CONSTRAINT "service_detail_id_jenis_kerusakan_fkey" FOREIGN KEY ("id_jenis_kerusakan") REFERENCES "jenis_kerusakan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
