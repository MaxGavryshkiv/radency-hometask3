(function () {
  const Notes = require("../repositories/index.ts");

  const archiveNote = async (req, res, next) => {
    try {
      const note = await Notes.archiveNote(req.params.id);
      if (note) {
        return res
          .status(201)
          .json({ status: "success", code: 200, data: { note } });
      }
      return res.json({ status: "error", code: 404, message: "Not found" });
    } catch (e) {
      next(e);
    }
  };

  module.exports = archiveNote;
})();
