import { z } from "zod";

const jenisKerusakanSchema = z.object({
  nama_kerusakan: z.string(),
  saran: z.object({}).passthrough(),
  manfaat: z.object({}).passthrough(),
});

export default jenisKerusakanSchema;
