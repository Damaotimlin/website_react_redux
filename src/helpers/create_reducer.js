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
export default function createReducer (INITIAL_STATE = {}, actionMap = {}){
	// console.log('createReducer fired!')
	// console.log('createReducer\'s actionMap=>')
	// console.log(actionMap)
	return (state = INITIAL_STATE, action) => {
		// console.log(`createReducers\'s ${action.type} =>`)
		// console.log(action.type)
		const mapper = actionMap[action.type];
		// console.log('createReducers\'s mapper =>')
		// console.log(mapper)
		// console.log('createReducers\'s state =>')
		// console.log(state)
		return mapper ? mapper(state, action) : state
	}
};
