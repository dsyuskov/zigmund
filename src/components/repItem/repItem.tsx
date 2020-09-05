import React from 'react';
import { ReposType } from '../../reducers/repositories';
import Star from './star';
import Fork from './fork';
import Watcher from './watcher';

import './repItem.scss';

type RepItemPropsType = {
  classesList?: string;
  repos: ReposType;
};

const RepItem: React.FC<RepItemPropsType> = (props) => {
  const { classesList, repos } = props;
  const {
    name,
    url,
    forksCount,
    watchersCount,
    stargazersCount,
    description,
  } = repos;

  return (
    <div className={`rep-item ${classesList}`}>
      <div className="rep-item__name">
        <a href={url}>{name}</a>
      </div>
      <div className="rep-item__description">{description}</div>
      <div className="rep-item__info">
        <Star starCount={stargazersCount} />
        <Fork forkCount={forksCount} />
        <Watcher watcherCount={watchersCount} />
      </div>
    </div>
  );
};

export default RepItem;
