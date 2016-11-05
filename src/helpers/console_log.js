//========================================================
//  Helper to print in console
//--------------------------------------------------------
export const cLog = (content = []) => {
	content.map(c => console.log(c))
	console.log("=============== END_LOG ===============")
};