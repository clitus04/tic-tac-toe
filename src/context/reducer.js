import { actions } from "./actions";

export const initialState = {
  data: [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ],
  X: [],
  O: [],
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
    case actions.UPDATEPLAYERDATA:
      const prevDatas = state[action.payload.player];
      return {
        ...state,
        [action.payload.player]: [...prevDatas, action.payload.time],
      };
    default:
      return state;
  }
};
