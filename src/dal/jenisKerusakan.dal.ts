import { prisma } from "../app";
import type { IResponse } from "../interfaces/common.interface";

const CreateJenisKerusakan = async (payload: any): Promise<IResponse> => {
  try {
    // Check if jenis kerusakan already exists
    const isExist = await prisma.jenis_kerusakan.findFirst({
      where: {
        nama_kerusakan: payload.nama_kerusakan,
      },
    });

    if (isExist) {
      return { status: false, message: "Jenis kerusakan already exists" };
    }

    await prisma.jenis_kerusakan.create({
      data: {
        nama_kerusakan: payload.nama_kerusakan,
        saran: payload.saran,
        manfaat: payload.manfaat,
      },
    });
    return { status: true, message: "Jenis kerusakan created successfully" };
  } catch (error) {
    console.log(`Create jenis kerusakan failed: ${error}`);
    return { status: false, message: "Create jenis kerusakan failed" };
  }
};

const GetAllJenisKerusakan = async (): Promise<any[]> => {
  try {
    const results = await prisma.jenis_kerusakan.findMany({
      select: {
        nama_kerusakan: true,
        saran: true,
        manfaat: true,
      },
    });

    return results;
  } catch (error) {
    console.log(`Get all jenis kerusakan failed: ${error}`);
    return [];
  }
};

const GetJenisKerusakanById = async (id: number): Promise<any> => {
  try {
    const result = await prisma.jenis_kerusakan.findUnique({
      where: {
        id: id,
      },
      select: {
        nama_kerusakan: true,
        saran: true,
        manfaat: true,
      },
    });

    if (result === null) {
      return { code: 404, message: "Jenis Kerusakan not found" };
    } else {
      return { code: 200, message: "Jenis Kerusakan found", data: result };
    }
  } catch (error) {
    console.log(`Get jenis kerusakan by id failed: ${error}`);
    return { code: 400, message: "Failed to retrieve Jenis Kerusakan Data" };
  }
};

const UpdateJenisKerusakan = async (
  id: number,
  payload: any
): Promise<IResponse> => {
  try {
    const { nama_kerusakan, saran, manfaat } = payload;

    // check if jenis kerusakan exists
    const isExist = await prisma.jenis_kerusakan.findUnique({
      where: {
        id: id,
      },
    });

    if (isExist === null) {
      return { code: 404, message: "Jenis Kerusakan not found" };
    }

    // update jenis kerusakan
    await prisma.jenis_kerusakan.update({
      where: {
        id: id,
      },
      data: {
        nama_kerusakan,
        saran,
        manfaat,
      },
    });

    return { code: 200, message: "Jenis Kerusakan updated successfully" };
  } catch (error) {
    console.log(`Update jenis kerusakan failed: ${error}`);
    return { code: 400, message: "Update jenis kerusakan failed" };
  }
};

const DeleteJenisKerusakan = async (id: number): Promise<IResponse> => {
  try {
    const isExist = await prisma.jenis_kerusakan.findUnique({
      where: {
        id: id,
      },
    });

    if (isExist === null) {
      return { code: 404, message: "Jenis Kerusakan not found" };
    }

    await prisma.jenis_kerusakan.delete({
      where: {
        id: id,
      },
    });

    return { code: 200, message: "Jenis Kerusakan deleted successfully" };
  } catch (error) {
    console.log(`Delete jenis kerusakan failed: ${error}`);
    return { code: 400, message: "Delete jenis kerusakan failed" };
  }
};

export { CreateJenisKerusakan, GetAllJenisKerusakan, GetJenisKerusakanById, UpdateJenisKerusakan, DeleteJenisKerusakan };
