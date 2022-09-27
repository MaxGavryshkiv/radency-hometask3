(function () {
  const Notes = require("../repositories/index.ts");

  const updateNote = async (req, res, next) => {
    try {
      const note = await Notes.updateNote(req.params.id, req.body);
      if (note) {
        return res.json({ status: "success", code: 200, data: { note } });
      }
      return res.json({ status: "error", code: 404, message: "Not found" });
    } catch (e) {
      next(e);
    }
  };

  module.exports = updateNote;
})();
