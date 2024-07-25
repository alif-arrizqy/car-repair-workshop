-- CreateTable
CREATE TABLE "role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "jenis_kerusakan" (
    "id" SERIAL NOT NULL,
    "nama_kerusakan" TEXT NOT NULL,
    "saran" TEXT NOT NULL,
    "manfaat" TEXT NOT NULL,

    CONSTRAINT "jenis_kerusakan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service" (
    "id_service" UUID NOT NULL,
    "tanggal_service" TIMESTAMP(3) NOT NULL,
    "id_user" UUID NOT NULL,
    "nama_pelanggan" TEXT NOT NULL,
    "nomor_kendaraan" TEXT NOT NULL,
    "tipe_bodi" TEXT NOT NULL,
    "merk_mobil" TEXT NOT NULL,
    "accepted" BOOLEAN NOT NULL,
    "status_pekerjaan" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id_service")
);

-- CreateTable
CREATE TABLE "service_detail" (
    "id" SERIAL NOT NULL,
    "id_service" UUID NOT NULL,
    "id_jenis_kerusakan" INTEGER NOT NULL,
    "foto_before" TEXT NOT NULL,
    "foto_after" TEXT NOT NULL,

    CONSTRAINT "service_detail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_detail" ADD CONSTRAINT "service_detail_id_jenis_kerusakan_fkey" FOREIGN KEY ("id_jenis_kerusakan") REFERENCES "jenis_kerusakan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
