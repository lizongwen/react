import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import { counter, addGun, removeGun, addGunAsync, removeGunAsync } from './index.redux'

const reduxDevtools = window.devToolsExtension?window.devToolsExtension:()=>{};
console.log(reduxDevtools)
const store = createStore(counter, compose(applyMiddleware(thunk), reduxDevtools()));


//监听器
function listener() {
	const current = store.getState();
	console.log(`现在有机关枪${current}把`);
	render();
}
//监听器注册到store
store.subscribe(listener)
//或者
// store.subscribe(render)

//渲染dom
// ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun} 老大='李云龙'/>, document.getElementById('root'));
function render() {
	ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync} removeGunAsync={removeGunAsync} 老大='李云龙' />, document.getElementById('root'));
}
render();
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
