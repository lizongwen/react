import React, { Component } from 'react';
import { Button } from 'antd-mobile';
import './App.css';

class App extends Component {
	render() {
		const boss = '李云龙1'
		return (
			<div>
				<h2>独立团,团长{this.props.老大}、{boss}</h2>
				<Yy 老大='张大喵'></Yy>
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
		console.log('组件初始化');
	}
	componentWillMount(){
		console.log('组件马上加载');
	}
	componentDidMount(){
		console.log('组件加载完毕')
	}
	componentWillReceiveProps(nextProps){
		console.log('组件要接受父组件的值了')
	}
	componentWillUpdate(){
		console.log('马上要更新组件')
	}
	componentDidUpdate(){
		console.log('马上更新完毕')
	}
	componentWillUnmount(){
		console.log('组件卸载了');
	}
	addSolder = () => {
		this.setState({
			solders: [...this.state.solders, '新兵']
		})
	}
	render() {
		console.log('组件正在加载')
		return (
			<div>
				<h2>{this.props.老大}</h2>
				<Button type="primary" onClick={this.addSolder}>增加士兵</Button>
				<ul>
					{this.state.solders.map((item, index) => {
						return <li key={index}>{item}</li>
					})}
				</ul>
			</div>
		)
	}
}
export default App;
