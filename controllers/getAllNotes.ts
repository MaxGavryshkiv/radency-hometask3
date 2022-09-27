import { Request, Response, NextFunction } from "express";
const Notes = require("../repositories/index.ts");

const getAllNotes = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const notes = await Notes.getAllNotes();
    return res.json({ status: "success", code: 200, data: { notes } });
  } catch (e) {
    next(e);
  }
};

module.exports = getAllNotes;
