const initialState = {
  dateNote: "",
};

const editTime = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_EDIT_TIME":
      return {
        ...state,
        dateNote: action.dateData,
      };
    default:
      return state;
  }
};

export default editTime;
