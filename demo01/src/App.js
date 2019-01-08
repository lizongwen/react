import React, { Component } from 'react';
import { Button, List } from 'antd-mobile';
import { connect } from 'react-redux';
import { addGun,addGun1, removeGun, addGunAsync, removeGunAsync } from './App.redux'
import './App.css';

// 你要的state变量放到props,你要的方法放到props
// @connect((num) => ({count: num }),{ addGun, removeGun, addGunAsync, removeGunAsync })
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			Yyld: '张大喵1',
			solders: ['兵4', '兵5', '兵6']
		}
	}
	setSolders = (value) => {
		this.setState({
			solders: [...this.state.solders, value]
		});
	}
	componentWillMount() {
		// this.Yyld='张大喵1'
	}
	setBoss = () => {
		this.setState({
			Yyld: '张大喵2'
		})
	}
	render() {
		console.log(this.props);
		const boss = '李云龙1'
		// const store = this.props.store
		// const initNum = store.getState();
		// const initNum = this.props.num;
		// const addGun = this.props.addGun;
		// const removeGun = this.props.removeGun;
		// const addGunAsync = this.props.addGunAsync;
		// const removeGunAsync = this.props.removeGunAsync;
		return (
			<div>
				<h1>现在有机枪{this.props.count}</h1>
				{/* <Button type="primary" onClick={() => store.dispatch(addGun())}>加武器</Button>
				<Button type="primary" onClick={() => store.dispatch(removeGun())}>减武器</Button>
				<Button type="primary" onClick={() => store.dispatch(addGunAsync())}>异步加武器</Button>
				<Button type="primary" onClick={() => store.dispatch(removeGunAsync())}>异步减武器</Button> */}
				{/* <Button type="primary" onClick={() => store.dispatch(addGun())}>加武器</Button> */}
				<Button type="primary" onClick={() =>{console.log(this.props.addGun);this.props.addGun(10)}}>加武器1</Button>
				<Button type="primary" onClick={() =>{console.log(this.props.addGun1);this.props.addGun1(10)}}>加武器2</Button>
				<Button type="primary" onClick={this.props.removeGun}>减武器</Button>
				<Button type="primary" onClick={() =>this.props.addGunAsync(10)}>异步加武器</Button>
				<Button type="primary" onClick={this.props.removeGunAsync}>异步减武器</Button>
				<h2>独立团,团长{this.props.老大}、{boss}</h2>
				<Button type="primary" onClick={this.setBoss}>修改一营老大</Button>
				<Yy 老大={this.state.Yyld} 士兵组={this.state.solders} setSolders={this.setSolders} left={<h6>左边</h6>} right={<h6>右边</h6>}>
					<h6>一营的子元素</h6>
				</Yy>
				<Qbl 老大='孙得胜'></Qbl>
			</div>
		)
	}
}

function Qbl(props) {
	return <h2>骑兵连:{props.老大}，冲啊</h2>
}
class Yy extends Component {
	constructor(props) {
		super(props)
		this.state = {
			solders: ['兵1', '兵2', '兵3']
		}
		// console.log('组件初始化');

	}
	componentWillMount() {
		console.log('组件马上加载');
		this.country = "美国";
	}
	componentDidMount() {
		// console.log('组件加载完毕')
	}
	componentWillReceiveProps(nextProps) {
		// console.log('组件要接受父组件的值了')
	}
	componentWillUpdate() {
		// console.log('马上要更新组件')
	}
	componentDidUpdate() {
		// console.log('马上更新完毕')
	}
	componentWillUnmount() {
		// console.log('组件卸载了');
	}
	// addSolder = () => {
	// 	this.setState({
	// 		solders: [...this.state.solders, '新兵']
	// 	});
	// }
	setParentSolder(value) {
		this.props.setSolders(value);
	}
	render() {
		// console.log(this);
		// console.log('组件正在加载');
		this.country = "中国"
		return (
			<div>
				<div>{this.country}9999999</div>
				<h2>一营老大:{this.props.老大}</h2>
				<Button type="primary" onClick={() => this.setParentSolder(8888)}>增加士兵</Button>
				<List renderHeader={() => '士兵列表'}>
					{this.props.士兵组.map((item, index) => {
						return <List.Item key={index}>{item}</List.Item>
					})}
				</List>
				{this.props.children}  {/* <h6>一营的子元素</h6> */}
				{this.props.left}{this.props.right}
			</div>
		)
	}
}

const mapStatetoProps = (state) => {
	return { count: state.counter }
}
const mapDispatchToprops = dispatch => ({
	addGun: num => dispatch(addGun(num)),
	addGun1: num => dispatch(addGun1(num)),
	removeGun:()=>dispatch(removeGun()),
	addGunAsync:num=>dispatch(addGunAsync(num)),
	removeGunAsync:()=>dispatch(removeGunAsync()),
})
const actionCreators = { addGun, addGun1,removeGun, addGunAsync, removeGunAsync };
App = connect(mapStatetoProps, actionCreators)(App);
//或者下面这种写法
// App = connect(mapStatetoProps, mapDispatchToprops)(App);
export default App;
