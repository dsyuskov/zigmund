export const IS_LOADING = 'IS_LOADING';

export type ChangeLoadingActionType = {
  type: typeof IS_LOADING;
};

export const changeLoading = (): ChangeLoadingActionType => {
  return {
    type: IS_LOADING,
  };
};
