import del from "del";

export const deleteFile = () => {
  const deleteFiles = del(app.path.clean);
  return deleteFiles;
};
