import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.resolve(__dirname, "./dist")));

app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./dist/index.html"));
});

const port = parseInt(process.env.PORT, 10) || 3080;

app.listen(port);

export default app;
