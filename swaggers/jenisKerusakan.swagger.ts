const JenisKerusakanSchemas = {
  CreateJenisKerusakan: {
    type: "object",
    properties: {
      nama_kerusakan: {
        type: "string",
        example: "Kerusakan Mesin",
      },
      saran: {
        type: "object",
        additionalProperties: true,
        example: { "1": "saran 1", "2": "saran 2" },
      },
      manfaat: {
        type: "object",
        additionalProperties: true,
        example: { "1": "manfaat 1", "2": "manfaat 2" },
      },
    },
  },
};

export default JenisKerusakanSchemas;
