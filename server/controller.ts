import validateHandle from "./processingfuncs/validatehandle";
import { NextFunction, Request, Response } from "express";

const controller = async (handle: string, next: NextFunction) => {
  // 1. validate Handle
  const validatedHandle = validateHandle(handle, next);
};

export default controller;
