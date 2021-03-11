import * as actions from './index'

const registerAction = (email, name, age) => ({
  type: actions.REGISTER,
  payload: {
    email,
    name,
    age,
  }
})

export default registerAction;