import { ReposType, QyeryType } from '../reducers/repositories';

export const CHANGE_SEARCH_QUERY = 'CHANGE_SEARCH_QUERY';
export const ADD_REPOSITORIES = 'ADD_REPOSITORIES';
export const GET_REPOSITORIES = 'GET_REPOSITORIES';
export const ADD_TOTAL_REPOSITORIES = 'ADD_TOTAL_REPOSITORIES';

export type ChangeSearchQueryActionType = {
  type: typeof CHANGE_SEARCH_QUERY;
  payload: QyeryType;
};

export const changeSearchQuery = (value: QyeryType):ChangeSearchQueryActionType => {
  return {
    type: CHANGE_SEARCH_QUERY,
    payload: value,
  };
};

export type GetRepositoriesActionsType = {
  type: typeof GET_REPOSITORIES;
  payload: QyeryType;
};

export const getRepositories = (
  query: QyeryType
): GetRepositoriesActionsType => {
  return {
    type: GET_REPOSITORIES,
    payload: query,
  };
};

export type AddRepositoriesActionType = {
  type: typeof ADD_REPOSITORIES;
  payload: Array<ReposType>;
};

export const addRepositories = (
  repos: Array<ReposType>
): AddRepositoriesActionType => {
  return {
    type: ADD_REPOSITORIES,
    payload: repos,
  };
};

export type AddTotalRepositoriesActionType = {
  type: typeof ADD_TOTAL_REPOSITORIES;
  payload: number;
};

export const addTotalRepositories = (
  count: number
): AddTotalRepositoriesActionType => {
  return {
    type: ADD_TOTAL_REPOSITORIES,
    payload: count,
  };
};
