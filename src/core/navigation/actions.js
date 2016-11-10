import {
	NAVBAR_ITEM,
	BURGER_BTN_CLICKED
} from './action-types'

export const burgerOnClicked = () => {
	return (dispatch, getState) => {	
		const isClickedState = getState().navigation.burgerClicked
		isClickedState 
		? dispatch({
		    type: BURGER_BTN_CLICKED,
		    burgerClicked: false
			})
		: dispatch({
				type: BURGER_BTN_CLICKED,
		    burgerClicked: true
		});
	}
};