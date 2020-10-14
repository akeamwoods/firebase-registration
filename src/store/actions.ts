import { ActionType, createAction } from "typesafe-actions";

const registerUser = createAction("user registered")();

export const actions = {
  registerUser,
};

export type Actions = ActionType<typeof actions>;
