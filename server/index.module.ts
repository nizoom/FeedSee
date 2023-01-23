import { NextFunction, Request, Response } from "express";
import path, { resolve } from "path";
require("dotenv").config({ path: __dirname + "/./../.env" });
import express, { Application } from "express";
import cors from "cors";
const indexRouter = require("./routes.js");
const PORT = process.env.PORT || 3001;
const app: Application = express();
import controller from "./controller";
import { request, STATUS_CODES } from "http";
interface envVars {
  api_key: string;
  api_secret: string;
  bearer_token: string;
}

export const credentials = {
  api_key: `${process.env.REACT_APP_API_KEY}`,
  api_secret: `${process.env.REACT_APP_API_SECRET}`,
  bearer_token: `${process.env.REACT_APP_BEARER_TOKEN}`,
} as envVars;

app.use(cors());
// --------------------------------
// ---------------- ADD THIS ----------------
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
// --------------------------------
app.use("/", indexRouter);

app.get(
  "/api/users/:handle",
  async (req: Request, res: Response, next: NextFunction) => {
    // console.log(credentials);
    const handle: string = req.params.handle;
    const responseFromController = await controller(handle, next);
    console.log(responseFromController);
    res.send(responseFromController);
  }
);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.log("in next block");
  console.error(err.stack);
  res.status(500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
