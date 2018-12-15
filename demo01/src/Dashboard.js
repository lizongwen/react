import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import { Route, Link, Redirect, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import App from './App';
import { logout } from './Auth.redux'

const mapStatetoProps = (state) => {
	return state.auth
}
const actionCreators = { logout };
function Second(props) {
	console.log(props)
	return (
		<div>
			<h1>二团,路由参数:{props.match.params.loc}</h1>
		</div>
	)
}
function Three(props) {
	return (
		<div>
			<h1>三团</h1>
		</div>
	)
}
class Test extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	render() {
		console.log(this.props)
		return (
			<h1>
				404页面
			</h1>
		)
	}
}
class Dashboard extends Component {
	// constructor(props) {
	// 	super(props);

	// }
	render() {
		console.log(this.props)
		const match = this.props.match;
		const redirectToLogin = <Redirect to='/login'></Redirect>
		const app = (
			<div>
				<h1>独立团</h1>
				{this.props.isAuth ? <Button type="primary" onClick={this.props.logout}>退出</Button> : null}
				<ul>
					<li>
						<Link to='/login'>调转登录页</Link>
					</li>
					<li>
						<Link to='/dashboard'>一团</Link>
						<Link to={`${match.url}`}>一团</Link>
					</li>
					<li>
						<Link to='/dashboard/second'>二团</Link>
						<Link to={`${match.url}/second`}>二团</Link>
					</li>
					<li>
						<Link to='/dashboard/second/ttt'>二团带参数路由</Link>
						<Link to={`${match.url}/second/ttt`}>二团带参数路由</Link>
					</li>
					<li>
						<Link to='/dashboard/three'>三团</Link>
						<Link to={`${match.url}/three`}>三团</Link>
					</li>
				</ul>
				<Switch>
					{/* <Route path='/dashboard' exact component={App}></Route> */}
					<Route path={`${match.url}`} exact component={App}></Route>
					{/* <Route path='/dashboard/second' exact component={Second}></Route> */}
					<Route path={`${match.url}/second`} exact component={Second}></Route>
					{/* <Route path='/dashboard/second/:loc' exact component={Second}></Route> */}
					<Route path={`${match.url}/second/:loc`} exact component={Second}></Route>
					{/* <Route path='/dashboard/three' exact component={Three}></Route> */}
					<Route path={`${match.url}/three`} exact component={Three}></Route>
					{/* <Route path='/dashboard/:loc' exact component={Test}></Route> */}
					<Route path={`${match.url}/:loc`} exact component={Test}></Route>
				</Switch>
			</div>
		)
		return this.props.isAuth ? app : redirectToLogin;
	}
}
Dashboard = connect(mapStatetoProps, actionCreators)(Dashboard);
export default Dashboard;