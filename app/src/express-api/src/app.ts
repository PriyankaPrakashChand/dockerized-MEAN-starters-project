import express, { Express, Request, Response } from "express";
const app = express();
const port = process.env.SERVER_PORT;
import cors from "cors";
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.send({ hello: "world" });
});

app.listen(port, () => {
  console.log(`Example-app listening on port ${port}`);
});
