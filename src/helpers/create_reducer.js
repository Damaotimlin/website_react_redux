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
//	AFTER: Computed property names, ES6
//  createReducer(INITIAL_STATE, {
//  	[SOME_CASE] (state, { payloadName }){
// 	 		return { ...state, payloadName }
// 	 },
// 	 [OTHER_CASE] (state, { specific: { otherPayload } }){
//			retuen { ...state, targetState: otherPayload }
// 		}
// 	})
//--------------------------------------------------------
export const createReducer = (INITIAL_STATE = {}, actionMap = {}) => {
	return (state = INITIAL_STATE, action) => {
		const mapper = actionMap[action.type]
		return mapper ? mapper(state, action) : state
	}
};