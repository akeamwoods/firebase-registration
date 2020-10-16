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
import { Alert, User } from "./types";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user", "mode", "alerts", "loading"],
};

const initialState = () => ({
  mode: "Sign In" as "Sign In" | "Sign Up" | "Forgot Password",
  user: undefined as undefined | User,
  loading: false,
  alerts: [] as Alert[],
});

export type State = Readonly<ReturnType<typeof initialState>>;

export const rootReducer: Reducer<State, Actions> = (
  state = initialState(),
  action: Actions
) =>
  produce(state, (draft) => {
    switch (action.type) {
      case getType(actions.createAccountButtonClicked):
        draft.mode = "Sign In";
        break;
      case getType(actions.signUpButtonClicked):
        draft.mode = "Sign Up";
        break;
      case getType(actions.loginButtonClicked):
        draft.loading = true;
        break;
      case getType(actions.userLogin):
        draft.user = action.payload;
        draft.loading = false;
        break;
      case getType(actions.logoutButtonClicked):
      case getType(actions.userLogout):
        draft.user = undefined;
        break;
      case getType(actions.forgotPasswordButtonClicked):
        draft.mode = "Forgot Password";
        break;
      case getType(actions.alertDisplayed):
        draft.alerts = [...draft.alerts, action.payload];
        break;
      case getType(actions.alertCleared):
        draft.alerts = draft.alerts.filter(
          (alert) => alert.id !== action.payload
        );
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
