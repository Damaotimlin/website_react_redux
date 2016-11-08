//========================================================
//  Helper to write action dispatch as a simple Object.
//
//	WAS:
// 		return (dispatch) => {
// 			dispatch({ 
// 				type: FETCH_POST_START 
//		 	});
//		 	dispatch({ 
// 				type: LOADING_STATUS, 
// 				status: true 
// 			});
//			dispatch({ 
// 				type: LOADING_ERROR, 
// 				payload: err 
// 			});
// 		}
//
// NOW:
// 		return (dispatch) => {
// 			createDispatchers({
// 				FETCH_POST_START:{},
//
// 				LOADING_STATUS:{
// 					statue: true
// 				},
//
// 				LOADING_ERROR: err
// 			})
// 		}
//--------------------------------------------------------
export const activeAction = stateMap => {
	const actionNames = Object.keys(stateMap);
	actionNames.map((key) => {
		let dispatcher = {};
		dispatcher.type = key
		const payload = stateMap[`${key}`]
		if (payload != null) {
			if (typeof payload === 'function') {
				dispatcher.payload = payload
				console.log('activeAction take function=>');
				console.log(dispatcher)
				return dispatcher;
			}
			Object.keys(payload).map((key) => {
				dispatcher[`${key}`] = payload[`${key}`]
			});
		}
		console.log('activeAction =>');
		console.log(dispatcher)
		return dispatcher;
	})
}

export const createDispatchers = stateMap => {	
	console.log('createDispatchers fired!')
	return dispatch(activeAction(stateMap))
};
