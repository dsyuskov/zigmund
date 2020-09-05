import { combineReducers } from 'redux';
import UIState, { UIStateType } from './ui';
import repositoryState, { RepositoryStateType } from './repositories';

export type RootReducerType = {
  UIState: UIStateType;
  repositoryState: RepositoryStateType;
};

const rootReducer = combineReducers<RootReducerType>({
  UIState,
  repositoryState,
});

export default rootReducer;
