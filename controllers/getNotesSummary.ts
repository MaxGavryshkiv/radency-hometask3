import { Request, Response, NextFunction } from "express";
const Notes = require("../repositories/index.ts");

const getNotesSummary = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const summary = await Notes.getNotesSummary();
    return res.json({ status: "success", code: 200, data: { summary } });
  } catch (e) {
    next(e);
  }
};

module.exports = getNotesSummary;
