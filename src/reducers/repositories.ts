import {
  CHANGE_SEARCH_QUERY,
  ADD_REPOSITORIES,
  ADD_TOTAL_REPOSITORIES,
  ChangeSearchQueryActionType,
  AddRepositoriesActionType,
  AddTotalRepositoriesActionType,
} from '../actions/repositories';

export type ReposType = {
  id: number;
  name: string;
  url: string;
  forksCount: number;
  watchersCount: number;
  stargazersCount: number;
  description: string;
};

export type QyeryType = {
  companyName: string;
  perPage: number;
  page: number;
};

export const initialRepositoryState = {
  totalCount: 0,
  arrayRepos: [] as Array<ReposType>,
  query: {
    companyName: '',
    perPage: 10,
    page: 1,
  },
};

export type RepositoryStateType = typeof initialRepositoryState;

const repositoryState = (
  state = initialRepositoryState,
  action:
    | AddRepositoriesActionType
    | AddTotalRepositoriesActionType
    | ChangeSearchQueryActionType
): RepositoryStateType => {
  switch (action.type) {
    case CHANGE_SEARCH_QUERY: {
      return {
        ...state,
        query: action.payload,
      };
    }
    case ADD_REPOSITORIES: {
      return {
        ...state,
        arrayRepos: action.payload,
      };
    }
    case ADD_TOTAL_REPOSITORIES: {
      return {
        ...state,
        totalCount: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default repositoryState;
