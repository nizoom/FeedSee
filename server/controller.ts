import validateHandle from "./processingfuncs/validatehandle";
const controller = async (handle: string) => {
  // 1. validate Handle
  validateHandle(handle);
};

export default controller;
