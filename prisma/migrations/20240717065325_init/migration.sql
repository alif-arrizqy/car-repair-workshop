-- CreateTable
CREATE TABLE "roles" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" INTEGER NOT NULL,
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
CREATE TABLE "gambar_service" (
    "id" SERIAL NOT NULL,
    "id_service" INTEGER NOT NULL,
    "foto_before" TEXT NOT NULL,
    "foto_after" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "gambar_service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service" (
    "id" SERIAL NOT NULL,
    "id_user" INTEGER NOT NULL,
    "acceped" BOOLEAN NOT NULL,
    "status_pekerjaan" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "service_jenis_kerusakan" (
    "id" SERIAL NOT NULL,
    "id_service" INTEGER NOT NULL,
    "id_jenis_kerusakan" INTEGER NOT NULL,

    CONSTRAINT "service_jenis_kerusakan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_role_fkey" FOREIGN KEY ("role") REFERENCES "roles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service" ADD CONSTRAINT "service_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_jenis_kerusakan" ADD CONSTRAINT "service_jenis_kerusakan_id_service_fkey" FOREIGN KEY ("id_service") REFERENCES "service"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "service_jenis_kerusakan" ADD CONSTRAINT "service_jenis_kerusakan_id_jenis_kerusakan_fkey" FOREIGN KEY ("id_jenis_kerusakan") REFERENCES "jenis_kerusakan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
