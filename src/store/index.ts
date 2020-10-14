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
import { RegistrationValues } from "./types";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["activeProfile", "mode"],
};

const initialState = () => ({
  mode: "Sign In" as "Sign In" | "Sign Up",
  registeredUsers: [] as Exclude<RegistrationValues, "confirmPassword">[],
  activeUser: undefined as undefined | string,
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
