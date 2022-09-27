(function () {
  const express = require("express");
  const router = express.Router();
  const ctrl = require("../../controllers/CTRLindex.ts");

  const {
    validationCreateNote,
    validationUpdateNote,
  } = require("../../services/validation.ts");

  router.get("/stats", ctrl.CTRLgetNotesSummary);
  router.get("/", ctrl.CTRLgetAllNotes);
  router.get("/archive", ctrl.CTRLgetAllArchiveNotes);
  router.get("/:id", ctrl.CTRLgetNoteById);

  router.post("/", validationCreateNote, ctrl.CTRLaddNote);

  router.patch("/:id", validationUpdateNote, ctrl.CTRLupdateNote);

  router.patch("/archive/:id", ctrl.CTRLarchiveNote);
  router.patch("/unarchive/:id", ctrl.CTRLunarchiveNote);

  router.delete("/:id", ctrl.CTRLremoveNote);
  router.delete("/archive/:id", ctrl.CTRLremoveArchiveNote);

  module.exports = router;
})();
