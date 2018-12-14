const ADD_GUN = '加机关枪';
const REMOVE_GUN = '减机关枪';

//reducer
export function counter(num = 0, action) {
	switch (action.type) {
		case ADD_GUN:
			return num + 1;
		case REMOVE_GUN:
			return num - 1;
		default:
			return num;
	}
}

//action creator
export function addGun() {
	return {
		type: ADD_GUN
	}
}
export function removeGun() {
	return {
		type: REMOVE_GUN
	}
}

export function addGunAsync() {
	return dispatch => {
		setTimeout(() => {
			dispatch(addGun())
		}, 2000)
	}
}

export function removeGunAsync() {
	return dispatch => {
		setTimeout(() => {
			dispatch(removeGun())
		}, 3000)
	}
}