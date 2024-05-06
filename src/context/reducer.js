import { actions } from "./actions";

export const initialState = {
  data: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADDPLAYERVALUE:
      const { row, column, value } = action.payload;
      const newData = JSON.parse(JSON.stringify(state.data));
      newData[row][column] = value;
      return { ...state, data: newData };
    case actions.GAMEOVER:
      return { ...state, data: initialState.data };
    default:
      return state;
  }
};
