/*
  Warnings:

  - Added the required column `merk_mobil` to the `service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama_pelanggan` to the `service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomor_kendaraan` to the `service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tanggal_service` to the `service` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipe_bodi` to the `service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "service" ADD COLUMN     "merk_mobil" TEXT NOT NULL,
ADD COLUMN     "nama_pelanggan" TEXT NOT NULL,
ADD COLUMN     "nomor_kendaraan" TEXT NOT NULL,
ADD COLUMN     "tanggal_service" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "tipe_bodi" TEXT NOT NULL;
