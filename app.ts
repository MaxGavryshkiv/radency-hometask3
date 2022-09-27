(function () {
  const express = require("express");
  const cors = require("cors");
  const notesRouter = require("./routes/notes/index.ts");

  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/notes", notesRouter);

  app.use((req: Request, res: Response) => {
    res.status(404).json({ status: "error", code: 404, message: "Not found" });
  });

  app.use((err: Error, req: Request, res: Response) => {
    const status = err.status || 500;
    res
      .status(status)
      .json({ status: "fail", code: status, message: err.message });
  });

  module.exports = app;
})();
