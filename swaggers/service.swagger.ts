const serviceSchemas = {
  CreateService: {
    type: "object",
    properties: {
      tanggal_service: {
        type: "string",
        format: "date",
        example: "2024-08-17",
      },
      nama_pelanggan: {
        type: "string",
        example: "John Doe",
      },
      nomor_kendaraan: {
        type: "string",
        example: "B 1234 ABC",
      },
      tipe_bodi: {
        type: "string",
        enum: [
          "MPV",
          "Hatchback",
          "SUV",
          "Crossover",
          "Pickup Truk",
          "Sedan",
          "Minivan",
          "Van",
          "Coupe",
          "Wagon",
          "MUV",
          "Station Wagon",
          "Convertible",
          "Commercial",
        ],
        example: "SUV",
      },
      merk_mobil: {
        type: "string",
        example: "Toyota",
      },
      jenis_kerusakan: {
        type: "array",
        example: [1, 2],
      },
      foto_before: {
        type: "array",
        example: ["foto_before1.jpg", "foto_before2.jpg"],
      },
    },
  },
  acceptedService: {
    type: "object",
    properties: {
      id_service: {
        type: "number",
        example: 1,
      },
      accepted: {
        type: "boolean",
        example: true,
      },
    },
  },
  statusPekerjaanService: {
    type: "object",
    properties: {
      id_service: {
        type: "number",
        example: 1,
      },
      status_pekerjaan: {
        type: "string",
        enum: ["Selesai", "Dalam Proses", "Belum Dikerjakan"],
        example: "Selesai",
      },
    },
  },
  finishedService: {
    type: "object",
    properties: {
      id_service: {
        type: "number",
        example: 1,
      },
      foto_after: {
        type: "array",
        example: ["foto_after1.jpg", "foto_after2.jpg"],
      },
    },
  },
};

export default serviceSchemas;
