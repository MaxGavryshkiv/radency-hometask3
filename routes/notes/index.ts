(function () {
  const express = require("express");
  const router = express.Router();
  const ctrl = require("../../controllers/CTRLindex.ts");

  const {
    validationCreateNote,
    validationUpdateNote,
  } = require("../../services/validation.ts");

  router.get("/stats", ctrl.getNotesSummary);
  router.get("/", ctrl.getAllNotes);
  router.get("/archive", ctrl.getAllArchiveNotes);
  router.get("/:id", ctrl.getNoteById);

  router.post("/", validationCreateNote, ctrl.addNote);

  router.patch("/:id", validationUpdateNote, ctrl.updateNote);

  router.patch("/archive/:id", ctrl.archiveNote);
  router.patch("/unarchive/:id", ctrl.unarchiveNote);

  router.delete("/:id", ctrl.removeNote);
  router.delete("/archive/:id", ctrl.removeArchiveNote);

  module.exports = router;
})();
