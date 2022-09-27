(function () {
  const Notes = require("../repositories/index.ts");

  const getAllNotes = async (req, res, next) => {
    try {
      const notes = await Notes.getNotes();
      return res.json({ status: "success", code: 200, data: { notes } });
    } catch (e) {
      next(e);
    }
  };

  module.exports = getAllNotes;
})();
