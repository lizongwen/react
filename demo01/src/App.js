import React, { Component } from 'react';
import { Button, List } from 'antd-mobile';
import './App.css';

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
		console.log(666)
		this.setState({
			Yyld: '张大喵2'
		})
	}
	render() {
		const boss = '李云龙1'
		const store = this.props.store
		const initNum = store.getState();
		const addGun = this.props.addGun;
		const removeGun = this.props.removeGun;
		const addGunAsync = this.props.addGunAsync;
		const removeGunAsync = this.props.removeGunAsync;
		return (
			<div>
				<h1>现在有机枪{initNum}</h1>
				<Button type="primary" onClick={() => store.dispatch(addGun())}>加武器</Button>
				<Button type="primary" onClick={() => store.dispatch(removeGun())}>减武器</Button>
				<Button type="primary" onClick={() => store.dispatch(addGunAsync())}>异步加武器</Button>
				<Button type="primary" onClick={() => store.dispatch(removeGunAsync())}>异步减武器</Button>
				<h2>独立团,团长{this.props.老大}、{boss}</h2>
				<Button type="primary" onClick={this.setBoss}>修改一营老大</Button>
				<Yy 老大={this.state.Yyld} 士兵组={this.state.solders} setSolders={this.setSolders}></Yy>
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
		console.log(props)
		super(props)
		this.state = {
			solders: ['兵1', '兵2', '兵3']
		}
		console.log('组件初始化');

	}
	componentWillMount() {
		console.log('组件马上加载');
		this.aaa = "中国";
	}
	componentDidMount() {
		console.log('组件加载完毕')
	}
	componentWillReceiveProps(nextProps) {
		console.log('组件要接受父组件的值了')
	}
	componentWillUpdate() {
		console.log('马上要更新组件')
	}
	componentDidUpdate() {
		console.log('马上更新完毕')
	}
	componentWillUnmount() {
		console.log('组件卸载了');
	}
	// addSolder = () => {
	// 	this.setState({
	// 		solders: [...this.state.solders, '新兵']
	// 	});
	// }
	setParentSolder(value) {
		console.log(value)
		this.props.setSolders(value);
	}
	render() {
		console.log('组件正在加载');
		console.log(this.aaa)
		console.log(this);
		this.aaa = "美国"
		return (
			<div>
				<div>{this.aaa}9999999</div>
				<h2>{this.props.老大}</h2>
				<Button type="primary" onClick={() => this.setParentSolder(8888)}>增加士兵</Button>
				<List renderHeader={() => '士兵列表'}>
					{this.props.士兵组.map((item, index) => {
						return <List.Item key={index}>{item}</List.Item>
					})}
				</List>
			</div>
		)
	}
}
export default App;
