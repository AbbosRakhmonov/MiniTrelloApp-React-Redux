export const ADD_CARD = (list) => {
  return {
    type: "ADD_CARD",
    payload: list,
  };
};

export const EDIT_CARD = (list) => {
  return {
    type: "EDIT_CARD",
    payload: list,
  };
};

export const DELETE_CARD = (list) => {
  return {
    type: "DELETE_CARD",
    payload: list,
  };
};
