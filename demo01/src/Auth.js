import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, logout } from './Auth.redux'
import { Redirect } from 'react-router-dom';
import { Button } from 'antd-mobile';
const mapStatetoProps = (state) => {
	return state.auth
}
const actionCreators = { login, logout };

class Auth extends Component {
	// constructor(props) {
	// 	super(props)
	// }
	render() {
		return (
			<div>
				{this.props.isAuth ? <Redirect to='/dashboard' /> : null}
				<h2>没有权限，需要登录</h2>
				<Button type="primary" onClick={this.props.login}>登录</Button>
			</div>
		)
	}
}
Auth = connect(mapStatetoProps, actionCreators)(Auth);
export default Auth;