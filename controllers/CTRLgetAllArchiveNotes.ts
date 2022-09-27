(function () {
  const Notes = require("../repositories/index.ts");

  const getAllArchiveNotes = async (req, res, next) => {
    try {
      const notes = await Notes.getAllArchiveNotes();
      return res.json({ status: "success", code: 200, data: { notes } });
    } catch (e) {
      next(e);
    }
  };

  module.exports = getAllArchiveNotes;
})();
