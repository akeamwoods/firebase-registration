import { Actions, actions } from "./actions";
import { Reducer, createStore, applyMiddleware } from "redux";
import { TypedUseSelectorHook, useSelector } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootSaga } from "./rootSaga";
import produce from "immer";
import { getType } from "typesafe-actions";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { RegistrationValues, User } from "./types";
import * as Faker from "faker";
import { format } from "date-fns";

function generateUsers() {
  let users = [];

  for (let id = 1; id <= 50; id++) {
    let avatar = Faker.random.image();
    let id = Faker.random.uuid();
    let firstName = Faker.name.firstName();
    let lastName = Faker.name.lastName();
    let email = Faker.internet.email();
    let dateOfBirth = format(Faker.date.past(), "dd/LL/Y");

    users.push({
      id,
      avatar,
      firstName,
      lastName,
      dateOfBirth,
      email,
    });
  }

  return users;
}

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["activeProfile", "mode", "userData"],
};

const initialState = () => ({
  mode: "Sign In" as "Sign In" | "Sign Up",
  registeredUsers: [] as Exclude<RegistrationValues, "confirmPassword">[],
  activeUser: undefined as undefined | string,
  userData: generateUsers() as User[],
  activeProfile: undefined as undefined | string,
});

export type State = Readonly<ReturnType<typeof initialState>>;

export const rootReducer: Reducer<State, Actions> = (
  state = initialState(),
  action: Actions
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case getType(actions.userRegistered):
        if (
          !draft.registeredUsers
            .map((user) => user.email)
            .includes(action.payload.email)
        ) {
          draft.registeredUsers = [...draft.registeredUsers, action.payload];
          draft.activeUser = action.payload.id;
        }
        break;
      case getType(actions.userLoginSubmitted):
        const user = draft.registeredUsers.find(
          (u) => u.email === action.payload.email
        );
        if (user && user.password === action.payload.password) {
          draft.activeUser = user.id;
        }
        break;
      case getType(actions.logoutButtonClicked):
        draft.activeUser = undefined;
        break;
      case getType(actions.signInModeButtonClicked):
        draft.mode = "Sign In";
        break;
      case getType(actions.signUpModeButtonClicked):
        draft.mode = "Sign Up";
        break;
      case getType(actions.activeProfileClosed):
        draft.activeProfile = undefined;
        break;
      case getType(actions.viewProfileClicked):
        draft.activeProfile = action.payload;
        break;

      case getType(actions.profileDeleted):
        if (draft.activeProfile === action.payload)
          draft.activeProfile = undefined;

        draft.userData = [
          ...draft.userData.filter((data) => data.id !== action.payload),
        ];
        break;
    }
  });

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export const useTypedSelector: TypedUseSelectorHook<State> = useSelector;
