
export const deleteTask = (id) => {
  return {
    type: "deleteTask",
    task: id,
  };
};
