import { createDispatchers, activeAction } from './create_dispatchers';
import { createReducers } from './create_reducers';
import { cLog } from './console_log';

const Helpers = {
	createDispatchers,
	createReducers,
	activeAction,
	cLog
}

export default Helpers