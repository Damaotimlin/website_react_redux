//========================================================
//  Helper to write reducer as a simple Object.
//
//	WAS:
//	switch(type){
//		case SOME_CASE:
// 			return {
// 				type: action.type
// 				payloadName: action.payload
//			}
//		default:
// 			return state;
//   }
//
//	AFTER: Object initializer Computed property names, ES6
//  createReducer(INITIAL_STATE, {
//  	[SOME_CASE] (state, { payloadName }){
// 	 		return { ...state, payloadName }
// 	 },
// 	 [OTHER_CASE] (state, { specific: { otherPayload } }){
//			retuen { ...state, targetState: otherPayload }
// 		}
// 	})
//--------------------------------------------------------
export const createReducers = (INITIAL_STATE = {}, actionMap = {}) => {

	console.log('createReducer fired!')
	console.log('createReducer\'s actionMap=>')
	console.log(actionMap)
	return (state = INITIAL_STATE, action) => {
		let actiont = action
		console.log(`createReducers\'s ${actiont} =>`)
		console.log(actiont)
		const mapper = actionMap[actiont];
		console.log('createReducers\'s mapper =>')
		console.log(mapper)
		console.log('createReducers\'s state =>')
		console.log(state)
		return mapper ? mapper(state, action) : state
	}
};
