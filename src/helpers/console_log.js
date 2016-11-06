//========================================================
//  Helper to print in console
//--------------------------------------------------------
export const cLog = (content = [], condiction = null) => {
	if ( condiction === process.env.NODE_ENV || condiction === null ) {
		content.map(c => console.log(c))
		return console.log("=============== END_LOGLINE ===============")
	}
	return null
};