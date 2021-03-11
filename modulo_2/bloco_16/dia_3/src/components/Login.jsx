import React from 'react'
import {connect} from 'react-redux';
import logginAction from '../actions/logginAction'
import {Link} from 'react-router-dom';

class Login extends React.Component {
  constructor(){
    super();
    this.setState({
      email:'',
      password:'',
    })
    this.onClick = this.onClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onClick(){
    const { log } = this.props;
    const {email, password} = this.state;
    log(email, password)
  }

  render() {
    return <div>
      <form action="">
        <input type="email" placeholder="digite seu email" name='email' onChange={this.handleChange}/>
        <input type="password" placeholder="digite sua senha" name='password' onChange={this.handleChange}/>
        <button type="button" onClick={this.onClick}>Login</button>
      </form>
      <Link to="/clientregister">TESTE</Link>
    </div>
  }
}

const mapDispatchToProps = (dispatch) => ({
  log: (email, password) =>
    dispatch(logginAction(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);
