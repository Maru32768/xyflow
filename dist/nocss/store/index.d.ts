import { Store } from 'redux';
import { ReactFlowState } from '../types';
import { ReactFlowAction } from "./actions";
export declare const initialState: ReactFlowState;
declare const store: Store<ReactFlowState, ReactFlowAction>;
export type ReactFlowDispatch = typeof store.dispatch;
export default store;
