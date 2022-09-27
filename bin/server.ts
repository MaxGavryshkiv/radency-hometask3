const Notes = require("../repositories/index");
const app = require("../app.ts");

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`);
});
