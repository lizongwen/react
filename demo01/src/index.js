import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


// import { counter, addGun, removeGun, addGunAsync, removeGunAsync } from './index.redux'
import { counter } from './index.redux'

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : () => { };
const store = createStore(counter, compose(applyMiddleware(thunk), reduxDevtools()));


//监听器
// function listener() {
// const current = store.getState();
// console.log(`现在有机关枪${current}把`);
// render();
// }
//监听器注册到store
// store.subscribe(listener)
//或者
// store.subscribe(render)

//渲染dom
// ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun} 老大='李云龙'/>, document.getElementById('root'));
// function render() {
// ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync} removeGunAsync={removeGunAsync} 老大='李云龙' />, document.getElementById('root'));
// }
// render();

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
	constructor(props) {
		super(props);
	}
	render() {
		console.log(this.props)
		return (
			<h1>
				404页面
			</h1>
		)
	}
}
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<div>
				<ul>
					<li>
						<Link to='/'>一团</Link>
					</li>
					<li>
						<Link to='/second'>二团</Link>
					</li>
					<li>
						<Link to='/second/ttt'>二团带参数路由</Link>
					</li>
					<li>
						<Link to='/three'>三团</Link>
					</li>
				</ul>
				{/* switch匹配到一个就结束 */}
				<Switch>
					<Route path='/' exact component={App}></Route>
					<Route path='/second' exact component={Second}></Route>
					<Route path='/second/:loc' exact component={Second}></Route>
					<Route path='/three' exact component={Three}></Route>
					{/* <Redirect to='/three'></Redirect> */}
					<Route path='/:loc' exact component={Test}></Route>
				</Switch>
			</div>
			{/* <App 老大='李云龙' /> */}
		</BrowserRouter>
	</Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
