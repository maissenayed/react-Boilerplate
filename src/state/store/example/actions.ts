import { action } from "typesafe-actions";
import { IExample } from "./types";

export const FETCH_EXAMPLES = "@@EXAMPLES/FETCH_EXAMPLES";
export const FETCH_EXAMPLES_SUCCESS = "@@EXAMPLES/FETCH_EXAMPLES_SUCCESS";
export const FETCH_EXAMPLES_ERROR = "@@EXAMPLES/FETCH_EXAMPLES_ERROR";

export const fetchExamples = () => action(FETCH_EXAMPLES);

export const fetchExamplesSuccess = (data: IExample[]) => action(FETCH_EXAMPLES_SUCCESS, data);

export const fetchExamplesError = (message: string) => action(FETCH_EXAMPLES_ERROR, message);

export type ExamplesActions =
  | ReturnType<typeof fetchExamples>
  | ReturnType<typeof fetchExamplesError>
  | ReturnType<typeof fetchExamplesSuccess>;
