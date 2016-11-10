import {
	NAVBAR_ITEM,
	BURGER_BTN_CLICKED
} from './action-types'

export const burgerOnClicked = () => {
	return (dispatch, getState) => {	
		const isClickedState = getState().navigation.burgerClicked
		console.log(BURGER_BTN_CLICKED)
		console.log(isClickedState)
		!isClickedState 
		? dispatch({
		    type: BURGER_BTN_CLICKED,
		    burgerClicked: true
			})
		: dispatch({
				type: BURGER_BTN_CLICKED,
		    burgerClicked: false
		});
	}
};