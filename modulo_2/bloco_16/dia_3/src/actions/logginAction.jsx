import * as actions from "./index";

const logginAction = (email, password) => ({
  type: actions.LOGGIN,
  payload: {
    login: {
      email,
      password,
    },
  },
});

export default logginAction;
