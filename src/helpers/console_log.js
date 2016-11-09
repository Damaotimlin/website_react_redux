//========================================================
//  Helper to print in console
//--------------------------------------------------------
export default function cLog (content = [], condiction = null) {
	if ( condiction === process.env.NODE_ENV || condiction === null ) {
	console.log("=============== START_LOGLINE ===============")
		content.map(c => console.log(c))
		return console.log("---------------  END_LOGLINE  ---------------")
	}
	return null
};