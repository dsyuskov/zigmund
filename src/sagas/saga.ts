import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';

import {
  ADD_REPOSITORIES,
  GET_REPOSITORIES,
  ADD_TOTAL_REPOSITORIES,
  GetRepositoriesActionsType,
  CHANGE_SEARCH_QUERY,
} from '../actions/repositories';
import { IS_LOADING } from '../actions/ui';
import { ReposType, QyeryType } from '../reducers/repositories';

const API = 'https://api.github.com';

const fetchRepos = (query: QyeryType) => {
  return axios(
    `${API}/orgs/${query.companyName}/repos?per_page=${query.perPage}&page=${query.page}`
  ).then((response) => {
    return response.data;
  });
};

const fetchTotalCount = (query: QyeryType) => {
  return axios(`${API}/orgs/${query.companyName}`).then((response) => {
    return response.data.public_repos;
  });
};

export function* getRepositories(action: GetRepositoriesActionsType) {
  try {
    yield put({ type: IS_LOADING });
    yield put({ type: CHANGE_SEARCH_QUERY, payload: action.payload });
    const result = yield call(fetchRepos, action.payload);
    const totalCount = yield call(fetchTotalCount, action.payload);

    const payload: Array<ReposType> = [];
    result.forEach((element: any) => {
      payload.push({
        id: element.id,
        name: element.name,
        url: element.html_url,
        forksCount: element.forks_count,
        watchersCount: element.watchers_count,
        stargazersCount: element.stargazers_count,
        description: element.description,
      });
    });
    yield put({ type: ADD_REPOSITORIES, payload: payload });
    yield put({ type: ADD_TOTAL_REPOSITORIES, payload: totalCount });
    yield put({ type: IS_LOADING });
  } catch {
    yield put({ type: ADD_REPOSITORIES, payload: [] });
    yield put({ type: ADD_TOTAL_REPOSITORIES, payload: 0 });
    yield put({ type: IS_LOADING });
  }
}

export function* watchGetRepositories() {
  yield takeEvery(GET_REPOSITORIES, getRepositories);
}
