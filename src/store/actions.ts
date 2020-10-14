import { ActionType, createAction } from "typesafe-actions";
import { User } from "./types";

const loginButtonClicked = createAction("login button clicked")<{
  email: string;
  password: string;
}>();
const logoutButtonClicked = createAction("logout button clicked")();
const userLogin = createAction("user logged in")<User>();
const userLogout = createAction("user logged out")();
const registerUser = createAction("user registered")();

export const actions = {
  registerUser,
  loginButtonClicked,
  logoutButtonClicked,
  userLogin,
  userLogout,
};

export type Actions = ActionType<typeof actions>;
