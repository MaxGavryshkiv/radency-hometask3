(function () {
  const Notes = require("../repositories/index.ts");

  const unarchiveNote = async (req, res, next) => {
    try {
      const note = await Notes.unarchiveNote(req.params.id);

      if (note) {
        return res
          .status(200)
          .json({ status: "success", code: 201, data: { note } });
      }
      return res.json({ status: "error", code: 404, message: "Not found" });
    } catch (e) {
      next(e);
    }
  };

  module.exports = unarchiveNote;
})();
