import { Request, Response, NextFunction } from "express";
const Notes = require("../repositories/index.ts");

const getAllArchiveNotes = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const notes = await Notes.getAllArchiveNotes();
    return res.json({ status: "success", code: 200, data: { notes } });
  } catch (e) {
    next(e);
  }
};

module.exports = getAllArchiveNotes;
