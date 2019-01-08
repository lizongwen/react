const ADD_GUN = '加机关枪';
const REMOVE_GUN = '减机关枪';

//reducer 纯函数
export function counter(state = 0, action) {
	switch (action.type) {
		case ADD_GUN:
			return state + action.num;
		case REMOVE_GUN:
			return state - 1;
		default:
			return state;
	}
}

//action创建函数的两种写法
//1
export function addGun(num) {
	console.log(arguments)
	return {
		type: ADD_GUN,
		num: num
	}
}
//2
export function addGun1(num) {
	console.log(arguments)
	return dispatch => {
		dispatch({
			type: ADD_GUN,
			num: num
		})
	}
}
export function removeGun() {
	return {
		type: REMOVE_GUN
	}
}

export function addGunAsync(num) {
	return dispatch => {
		// setTimeout(() => {
		dispatch(addGun(num))
		// }, 2000)
	}
}

export function removeGunAsync() {
	return dispatch => {
		// setTimeout(() => {
		dispatch(removeGun())
		// }, 3000)
	}
}