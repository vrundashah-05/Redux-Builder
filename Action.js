export const myAction = (data) => {
  return {
    type: "ADD",
    payload: data
  };
};
export const deleteAction = (index) => ({
  type: "DELETE",
  payload: index
});

export const editAction = (index, value) => ({
  type: "EDIT",
  payload: { index, value }
});