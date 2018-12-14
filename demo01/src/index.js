import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
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



ReactDOM.render(
	<Provider store={store}>
		<App 老大='李云龙' />
	</Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
