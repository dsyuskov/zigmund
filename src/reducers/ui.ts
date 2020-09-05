import { IS_LOADING, ChangeLoadingActionType } from '../actions/ui';

const initialUIState = {
  isLoading: false,
};

export type UIStateType = typeof initialUIState;

const UIState = (
  state = initialUIState,
  action: ChangeLoadingActionType
): UIStateType => {
  switch (action.type) {
    case IS_LOADING: {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }
    default: {
      return state;
    }
  }
};

export default UIState;
