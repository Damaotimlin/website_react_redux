//========================================================
//  Helper to print in console
//--------------------------------------------------------
export const cLog = (content = [], condiction) => {
	if ( condiction === NODE_ENV || condiction === 'all' ) {
		content.map(c => console.log(c))
		return console.log("=============== END_LOGLINE ===============")
	}
	return null
};