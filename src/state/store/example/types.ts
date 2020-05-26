import { Loadable } from "../types";
export interface IExampleState {
  readonly data: Loadable<IExample[]>;
}

export type ApiResponse = Record<string, any>;

export interface IExample extends ApiResponse {
  attribute1: string;
}
