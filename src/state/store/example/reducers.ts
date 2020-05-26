import { IExampleState } from "./types";
import { Ok, Err } from "../types";
import { ExamplesActions, FETCH_EXAMPLES, FETCH_EXAMPLES_SUCCESS, FETCH_EXAMPLES_ERROR } from "./actions";

export const initialState: IExampleState = {
  data: "NotRequested",
};
export const ExampleReducer = (state: IExampleState = initialState, action: ExamplesActions): IExampleState => {
  switch (action.type) {
    case FETCH_EXAMPLES:
      return { ...state, data: "Loading" };
    case FETCH_EXAMPLES_SUCCESS:
      return { ...state, data: Ok(action.payload) };
    case FETCH_EXAMPLES_ERROR:
      return { ...state, data: Err(action.payload) };
    default:
      return state;
  }
};
