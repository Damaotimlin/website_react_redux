import {
	NAVBAR_ITEM,
	BURGER_BTN_CLICKED
} from './action-types'

export const burgerBtnClicked = () => ({
    type: BURGER_BTN_CLICKED,
    isClicked: true
});