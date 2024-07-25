/*
  Warnings:

  - Changed the type of `saran` on the `jenis_kerusakan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `manfaat` on the `jenis_kerusakan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "jenis_kerusakan" DROP COLUMN "saran",
ADD COLUMN     "saran" JSONB NOT NULL,
DROP COLUMN "manfaat",
ADD COLUMN     "manfaat" JSONB NOT NULL;
