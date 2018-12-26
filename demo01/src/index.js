import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Auth from './Auth.js';
import Dashboard from './Dashboard.js';

// import { counter, addGun, removeGun, addGunAsync, removeGunAsync } from './App.redux'
// import { counter } from './App.redux'
import reducers from './reducer.js';//合并reducer


const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : () => { };
// const store = createStore(counter, compose(applyMiddleware(thunk), reduxDevtools()));
const store = createStore(reducers, compose(applyMiddleware(thunk), reduxDevtools()));
console.log(store.getState());
// console.log(reducers)
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



ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route path='/login' component={Auth}></Route>
				<Route path='/dashboard' component={Dashboard}></Route>
				<Redirect to='/dashboard'></Redirect>
			</Switch>
			{/* <div>
				switch匹配到一个就结束
				<Switch>
					<Route path='/' exact component={App}></Route>
					<Route path='/second' exact component={Second}></Route>
					<Route path='/second/:loc' exact component={Second}></Route>
					<Route path='/three' exact component={Three}></Route>
					<Route path='/:loc' exact component={Test}></Route>
				</Switch>
			</div> */}
		</BrowserRouter>
	</Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
