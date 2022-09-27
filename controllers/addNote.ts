import { Request, Response, NextFunction } from "express";
const Notes = require("../repositories/index.ts");

const addNote = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const note = await Notes.addNote(req.body);
    return res
      .status(201)
      .json({ status: "success", code: 201, data: { note } });
  } catch (e) {
    next(e);
  }
};

module.exports = addNote;
