(function () {
  const Notes = require("../repositories/index.ts");

  const getNoteById = async (req, res, next) => {
    try {
      const note = await Notes.getNoteById(req.params.id);
      if (note) {
        return res.json({ status: "success", code: 200, data: { note } });
      }
      return res.json({ status: "error", code: 404, message: "Not found" });
    } catch (e) {
      next(e);
    }
  };

  module.exports = getNoteById;
})();
