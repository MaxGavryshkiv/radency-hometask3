(function () {
  const Notes = require("../repositories/index.ts");

  const getNotesSummary = async (req, res, next) => {
    try {
      const summary = await Notes.getNotesSummary();
      return res.json({ status: "success", code: 200, data: { summary } });
    } catch (e) {
      next(e);
    }
  };

  module.exports = getNotesSummary;
})();
