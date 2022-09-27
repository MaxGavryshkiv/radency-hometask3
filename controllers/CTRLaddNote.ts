(function () {
  const Notes = require("../repositories/index.ts");

  const addNote = async (req, res, next) => {
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
})();
