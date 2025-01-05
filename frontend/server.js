import express from "express";

const app = express();

app.use(express.static("."));

const PORT = 5001;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Frontend Server ready at http://localhost:${PORT}`);
});