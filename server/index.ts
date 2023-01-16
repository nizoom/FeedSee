import { Request, Response } from "express";
import path from "path";
require("dotenv").config({ path: __dirname + "/./../.env" });
import express, { Application } from "express";
import cors from "cors";
const indexRouter = require("./routes.js");
const PORT = process.env.PORT || 3001; //process.env
const app: Application = express();
interface envVars {
  consumer_key: string;
  consumer_secret: string;
  access_token_key: string;
  access_token_secret: string;
}

export const credentials = {
  consumer_key: `${process.env.REACT_APP_CONSUMER_KEY}`,
  consumer_secret: `${process.env.REACT_APP_CONSUMER_SECRET}`,
  access_token_key: `${process.env.REACT_APP_ACCESS_TOKEN_KEY}`,
  access_token_secret: `${process.env.REACT_APP_ACCESS_TOKEN_SECRET}`,
} as envVars;

app.use(cors());

// --------------------------------
// ---------------- ADD THIS ----------------
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));
// --------------------------------
app.use("/", indexRouter);

app.get("/api/users/:handle", (req: Request, res: Response) => {
  console.log("recieved");
  res.send("success");
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
