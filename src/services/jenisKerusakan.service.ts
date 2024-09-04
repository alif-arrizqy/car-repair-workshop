import * as JenisKerusakanDal from "../dal/jenisKerusakan.dal";
import type { IResponse } from "../interfaces/common.interface";

const createJenisKerusakanService = async (
  payload: any
): Promise<IResponse> => {
  return await JenisKerusakanDal.CreateJenisKerusakan(payload);
};

const getAllJenisKerusakanService = async (): Promise<any[]> => {
  return await JenisKerusakanDal.GetAllJenisKerusakan();
};

const getJenisKerusakanByIdService = async (id: number): Promise<any> => {
  return await JenisKerusakanDal.GetJenisKerusakanById(id);
};

const updateJenisKerusakanService = async (id: number, payload: any): Promise<IResponse> => {
  return await JenisKerusakanDal.UpdateJenisKerusakan(id, payload);
}

const deleteJenisKerusakanService = async (id: number): Promise<IResponse> => {
  return await JenisKerusakanDal.DeleteJenisKerusakan(id);
}

export {
  createJenisKerusakanService,
  getAllJenisKerusakanService,
  getJenisKerusakanByIdService,
  updateJenisKerusakanService,
  deleteJenisKerusakanService,
};
