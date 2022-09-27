import { Request, Response, NextFunction } from "express";
const Notes = require("../repositories/index.ts");

const removeArchiveNote = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const note = await Notes.removeArchiveNote(req.params.id);
    if (note) {
      return res.json({
        status: "success",
        message: "note deleted",
        code: 204,
        data: note,
      });
    }
    return res.json({ status: "error", code: 404, message: "Not found" });
  } catch (e) {
    next(e);
  }
};

module.exports = removeArchiveNote;
