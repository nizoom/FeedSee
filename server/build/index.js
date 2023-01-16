"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentials = void 0;
const path_1 = __importDefault(require("path"));
require("dotenv").config({ path: __dirname + "/./../.env" });
// const { express, Request, Response } = require("express");
// const app = express();
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const indexRouter = require("./routes.js");
const PORT = process.env.PORT || 3001; //process.env
exports.credentials = {
    consumer_key: `${process.env.REACT_APP_CONSUMER_KEY}`,
    consumer_secret: `${process.env.REACT_APP_CONSUMER_SECRET}`,
    access_token_key: `${process.env.REACT_APP_ACCESS_TOKEN_KEY}`,
    access_token_secret: `${process.env.REACT_APP_ACCESS_TOKEN_SECRET}`,
};
app.use((0, cors_1.default)());
// --------------------------------
// ---------------- ADD THIS ----------------
// Serve static files from the React app
app.use(express_1.default.static(path_1.default.join(__dirname, "client/build")));
// --------------------------------
app.use("/", indexRouter);
app.get("/api/users/:handle", (req, res) => {
    console.log("recieved");
});
