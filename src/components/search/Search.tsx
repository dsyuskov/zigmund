import React, { useState } from 'react';
import { QyeryType } from '../../reducers/repositories';

import './search.scss';

type SearchPropsType = {
  classesList?: string;
  onSearch: (value: QyeryType) => void;
};

const Search: React.FC<SearchPropsType> = (props) => {
  const { classesList } = props;
  const [searchString, setSearchString] = useState('');

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchString(event.target.value);
  };

  const onSearch = () => {
    props.onSearch({
      companyName: searchString,
      page: 1,
      perPage: 10,
    });
  };

  const onEnterHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className={`search ${classesList}`}>
      <input
        value={searchString}
        onChange={onChangeHandler}
        onKeyPress={onEnterHandler}
        className="search__input"
        type="text"
        placeholder="Enter company name"
      />
      <button className="search__button" onClick={onSearch}>
        Search
      </button>
    </div>
  );
};

export default Search;
