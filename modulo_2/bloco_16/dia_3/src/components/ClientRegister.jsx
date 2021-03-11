import React from "react";
import { connect } from "react-redux";
import registerAction from "../actions/registerAction"

class ClientRegister extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      name: '',
      age: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value)
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  onClick() {
    const { register } = this.props;
    const { email, name, age } = this.state;
    console.log(email, name, age);
    register(email, name, age);
  }

  render() {
    return (
      <form>
        <label htmlFor="email">
          Email:
          <input type="email" name="email" onChange={this.handleChange}/>
        </label>
        <label htmlFor="name">
          {' '}Nome:
          <input type="text" name="name" onChange={this.handleChange} />
        </label>
        <label htmlFor="age">
          {' '}Idade:
          <input type="number" name="age" onChange={this.handleChange} />
        </label>
        <button type="button" onClick={this.onClick}>CADASTRAR</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  register: (email, name, age) => dispatch(registerAction(email, name, age))
})

export default connect(null, mapDispatchToProps)(ClientRegister);
