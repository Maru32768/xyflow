import { Store } from 'redux';
import { configureStore as reduxConfigureStore } from '@reduxjs/toolkit';

import { ReactFlowState } from '../types';
import { ReactFlowAction } from './actions';
import reactFlowReducer from './reducer';

export default function configureStore(preloadedState: ReactFlowState): Store<ReactFlowState, ReactFlowAction> {
  return reduxConfigureStore({
    reducer: reactFlowReducer,
    preloadedState,
  });
}
