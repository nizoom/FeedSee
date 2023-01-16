import { Request, Response } from "express";
import path from "path";
require("dotenv").config({ path: __dirname + "/./../.env" });
import express, { Application } from "express";
import cors from "cors";
const indexRouter = require("./routes.js");
const PORT = process.env.PORT || 3001; //process.env
const app: Application = express();
import controller from "./controller";
interface envVars {
  // consumer_key: string;
  // consumer_secret: string;
  // access_token_key: string;
  // access_token_secret: string;
  api_key: string;
  api_secret: string;
  bearer_token: string;
}

export const credentials = {
  api_key: `${process.env.REACT_APP_API_KEY}`,
  api_secret: `${process.env.REACT_APP_API_SECRET}`,
  bearer_token: `${process.env.REACT_APP_BEARER_TOKEN}`,
  //   consumer_key: `${process.env.REACT_APP_CONSUMER_KEY}`,
  //   consumer_secret: `${process.env.REACT_APP_CONSUMER_SECRET}`,
  //   access_token_key: `${process.env.REACT_APP_ACCESS_TOKEN_KEY}`,
  //   access_token_secret: `${process.env.REACT_APP_ACCESS_TOKEN_SECRET}`,
} as envVars;

app.use(cors());

// --------------------------------
// ---------------- ADD THIS ----------------
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
// --------------------------------
app.use("/", indexRouter);

app.get("/api/users/:handle", async (req: Request, res: Response) => {
  // console.log(credentials);
  const handle: string = req.params.handle;
  const responseFromController = await controller(handle);
  res.send("succes");
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
