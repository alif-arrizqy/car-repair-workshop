import type { Request, Response } from "express";
import jenisKerusakanSchema from "../helpers/validation/jenisKerusakan.validation";
import { ResponseHelper } from "../helpers/response/response.helper";
import * as jenisKerusakanService from "../services/jenisKerusakan.service";

class JenisKerusakanController {
  /**
   * @swagger
   * /api/jenis-kerusakan:
   *   post:
   *     summary: Create a new jenis kerusakan
   *     tags: [Jenis Kerusakan]
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateJenisKerusakan'
   *     responses:
   *       201:
   *         description: Jenis kerusakan created successfully
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/SuccessCreate'
   *       400:
   *         description: Bad Request
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorMessage'
   */
  static createJenisKerusakan = async (req: Request, res: Response) => {
    const parsed = jenisKerusakanSchema.safeParse(req.body);
    if (parsed.success) {
      const jenisKerusakan =
        await jenisKerusakanService.createJenisKerusakanService(parsed.data);
      if (jenisKerusakan.status) {
        console.log(
          `Create jenis kerusakan success: ${jenisKerusakan.message}`
        );
        res
          .status(201)
          .json(ResponseHelper.successMessage(jenisKerusakan.message, 201));
      } else {
        console.log(`Create jenis kerusakan failed: ${jenisKerusakan.message}`);
        res
          .status(400)
          .json(ResponseHelper.errorMessage(jenisKerusakan.message, 400));
      }
    } else {
      console.log(
        `Create jenis kerusakan failed, Jenis kerusakan data is invalid: ${parsed.error.errors}`
      );
      res.status(400).json(ResponseHelper.errorData(parsed.error.errors, 400));
    }
  };

  /**
   * @swagger
   * /api/jenis-kerusakan:
   *   get:
   *     summary: Get all jenis kerusakan
   *     tags: [Jenis Kerusakan]
   *     responses:
   *       200:
   *         description: Get all jenis kerusakan success
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/SuccessDataArray'
   *       400:
   *         description: Bad Request
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorMessage'
   */
  static getAllJenisKerusakan = async (req: Request, res: Response) => {
    const jenisKerusakan =
      await jenisKerusakanService.getAllJenisKerusakanService();
    if (jenisKerusakan.length > 0) {
      console.log("Get all jenis kerusakan success");
      res.json(ResponseHelper.successData(jenisKerusakan, 200));
    } else {
      console.log("Get all jenis kerusakan failed");
      res
        .status(400)
        .json(
          ResponseHelper.errorMessage("Get all jenis kerusakan failed", 400)
        );
    }
  };

  /**
   * @swagger
   * /api/jenis-kerusakan/{id}:
   *   get:
   *     summary: Get jenis kerusakan by id
   *     tags: [Jenis Kerusakan]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID of jenis kerusakan
   *         schema:
   *           type: number
   *     responses:
   *       200:
   *         description: Get jenis kerusakan by id success
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/SuccessDataObject'
   *       400:
   *         description: Bad Request
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorMessage'
   *       404:
   *         description: Not Found
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorMessage'
   */
  static getJenisKerusakanById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const jenisKerusakan =
      await jenisKerusakanService.getJenisKerusakanByIdService(id);
    if (jenisKerusakan.code === 200) {
      console.log("Get jenis kerusakan by id success");
      res.json(ResponseHelper.successData(jenisKerusakan.data, 200));
    } else if (jenisKerusakan.code === 404) {
      console.log(
        "Get jenis kerusakan by id failed, Data Jenis Kerusakan not found"
      );
      res
        .status(404)
        .json(
          ResponseHelper.errorMessage("Data Jenis Kerusakan not found", 404)
        );
    } else {
      console.log("Get jenis kerusakan by id failed");
      res
        .status(400)
        .json(
          ResponseHelper.errorMessage(
            "Failed to retrieve Jenis Kerusakan Data",
            400
          )
        );
    }
  };

  /**
   * @swagger
   * /api/jenis-kerusakan/{id}:
   *   put:
   *     summary: Update jenis kerusakan by id
   *     tags: [Jenis Kerusakan]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID of jenis kerusakan
   *         schema:
   *           type: number
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateJenisKerusakan'
   *     responses:
   *       200:
   *         description: Update jenis kerusakan by id success
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/SuccessMessage'
   *       400:
   *         description: Bad Request
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorMessage'
   *       404:
   *         description: Not Found
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorMessage'
   */
  static updateJenisKerusakan = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const parsed = jenisKerusakanSchema.safeParse(req.body);
    if (parsed.success) {
      const jenisKerusakan =
        await jenisKerusakanService.updateJenisKerusakanService(
          id,
          parsed.data
        );
      if (jenisKerusakan.code === 200) {
        console.log(
          `Update jenis kerusakan by id success: ${jenisKerusakan.message}`
        );
        res.json(ResponseHelper.successMessage(jenisKerusakan.message, 200));
      } else if (jenisKerusakan.code === 404) {
        console.log(
          `Update jenis kerusakan by id failed: ${jenisKerusakan.message}`
        );
        res
          .status(404)
          .json(ResponseHelper.errorMessage(jenisKerusakan.message, 404));
      } else {
        console.log(
          `Update jenis kerusakan by id failed: ${jenisKerusakan.message}`
        );
        res
          .status(400)
          .json(ResponseHelper.errorMessage(jenisKerusakan.message, 400));
      }
    } else {
      console.log(
        `Update jenis kerusakan by id failed, Jenis kerusakan data is invalid: ${parsed.error.errors}`
      );
      res.status(400).json(ResponseHelper.errorData(parsed.error.errors, 400));
    }
  };

  /**
   * @swagger
   * /api/jenis-kerusakan/{id}:
   *   delete:
   *     summary: Delete jenis kerusakan by id
   *     tags: [Jenis Kerusakan]
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         description: ID of jenis kerusakan
   *         schema:
   *           type: number
   *     responses:
   *       200:
   *         description: Delete jenis kerusakan by id success
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/SuccessMessage'
   *       404:
   *         description: Not Found
   *         content:
   *           application/json:
   *             schema:
   *               $ref: '#/components/schemas/ErrorMessage'
   */
  static deleteJenisKerusakan = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const jenisKerusakan =
      await jenisKerusakanService.deleteJenisKerusakanService(id);
    if (jenisKerusakan.code === 200) {
      console.log(
        `Delete jenis kerusakan by id success: ${jenisKerusakan.message}`
      );
      res.json(ResponseHelper.successMessage(jenisKerusakan.message, 200));
    } else if (jenisKerusakan.code === 404) {
      console.log(
        `Delete jenis kerusakan by id failed: ${jenisKerusakan.message}`
      );
      res
        .status(404)
        .json(ResponseHelper.errorMessage(jenisKerusakan.message, 404));
    } else {
      console.log(
        `Delete jenis kerusakan by id failed: ${jenisKerusakan.message}`
      );
      res
        .status(400)
        .json(ResponseHelper.errorMessage(jenisKerusakan.message, 400));
    }
  };
}

export default JenisKerusakanController;
