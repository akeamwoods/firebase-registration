import { ActionType, createAction } from "typesafe-actions";
import { RegistrationValues } from "./types";

const registerUser = createAction("user registered")<
  Partial<RegistrationValues>
>();
const userRegistered = createAction("[saga] user registered")<
  RegistrationValues
>();
const userLoginSubmitted = createAction("[saga] user login submitted")<{
  email: string;
  password: string;
}>();
const logoutButtonClicked = createAction("logout button clicked")();
const signInModeButtonClicked = createAction("sign in mode button clicked")();
const signUpModeButtonClicked = createAction("sign up mode button clicked")();
const viewProfileClicked = createAction("view profile button clicked")<
  string
>();
const activeProfileClosed = createAction("active profile closed")();
const profileDeleted = createAction("profile deleted")<string>();
export const actions = {
  registerUser,
  userRegistered,
  userLoginSubmitted,
  logoutButtonClicked,
  signInModeButtonClicked,
  signUpModeButtonClicked,
  viewProfileClicked,
  activeProfileClosed,
  profileDeleted,
};

export type Actions = ActionType<typeof actions>;
