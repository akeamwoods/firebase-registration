import { ActionType, createAction } from "typesafe-actions";
import { Alert, User } from "./types";

const loginButtonClicked = createAction("login button clicked")<{
  email: string;
  password: string;
}>();
const logoutButtonClicked = createAction("logout button clicked")();
const userLogin = createAction("user logged in")<User>();
const userLogout = createAction("user logged out")();
const signUpButtonClicked = createAction("sign up button clicked")();
const createAccountButtonClicked = createAction(
  "create account button clicked"
)();
const loginWithFacebookButtonClicked = createAction(
  "login with facebook button clicked"
)();
const loginWithGoogleButtonClicked = createAction(
  "login with google button clicked"
)();
const registrationButtonClicked = createAction("registration button clicked")<{
  email: string;
  password: string;
}>();
const forgotPasswordButtonClicked = createAction(
  "forgot password button clicked"
)();
const resetPasswordButtonClicked = createAction(
  "reset password button clicked"
)<{ email: string }>();

const alertCreated = createAction("alert created")<Alert>();
const alertDisplayed = createAction("alert displayed")<Alert>();
const alertCancelButtonClicked = createAction("alert cancel button clicked")<
  string
>();
const alertCleared = createAction("alert cleared")<string>();

export const actions = {
  createAccountButtonClicked,
  signUpButtonClicked,
  loginButtonClicked,
  logoutButtonClicked,
  userLogin,
  userLogout,
  loginWithFacebookButtonClicked,
  loginWithGoogleButtonClicked,
  registrationButtonClicked,
  forgotPasswordButtonClicked,
  resetPasswordButtonClicked,
  alertCreated,
  alertDisplayed,
  alertCancelButtonClicked,
  alertCleared,
};

export type Actions = ActionType<typeof actions>;
