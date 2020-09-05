import React from 'react';
import { connect } from 'react-redux';

import Search from './components/search/Search';
import RepItem from './components/repItem/repItem';
import Loader from './components/loader/loader';
import Pagination from './components/pagination/pagination';

import { RootReducerType } from './reducers/index';
import { getRepositories } from './actions/repositories';
import { UIStateType } from './reducers/ui';
import {
  ReposType,
  QyeryType,
  RepositoryStateType,
} from './reducers/repositories';

import './app.scss';

type AppPropsType = {
  UIState: UIStateType;
  repositoryState: RepositoryStateType;
  getRepositories: (value: QyeryType) => void;
};

const App: React.FC<AppPropsType> = (props) => {
  const { repositoryState, UIState, getRepositories } = props;

  return (
    <React.Fragment>
      <div className="container">
        <Search classesList="search--margin" onSearch={getRepositories} />

        {UIState.isLoading && <Loader />}

        {!UIState.isLoading && (
          <div className="repository-list">
            {repositoryState.arrayRepos.map((rep: ReposType) => {
              return <RepItem repos={rep} key={rep.id} />;
            })}
            {repositoryState.totalCount > 0 && (
              <Pagination
                totalCount={repositoryState.totalCount}
                query={repositoryState.query}
                onSearch={getRepositories}
              />
            )}
            {repositoryState.query.companyName !== '' &&
              repositoryState.totalCount === 0 && (
                <div className="no-result">
                  Company{' '}
                  <span className="no-result__company-name">
                    {repositoryState.query.companyName}
                  </span>{' '}
                  not found.
                </div>
              )}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state: RootReducerType) => {
  const { repositoryState, UIState } = state;
  return { repositoryState, UIState };
};

const mapDispatchToProps = (dispatch: any) => ({
  getRepositories: (value: QyeryType) => dispatch(getRepositories(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
