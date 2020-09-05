import React, { useState, useEffect } from 'react';
import { QyeryType } from '../../reducers/repositories';
import './pagination.scss';

type PaginationPropsType = {
  classesList?: string;
  totalCount: number;
  query: QyeryType;
  onSearch: (value: QyeryType) => void;
};

const Pagination: React.FC<PaginationPropsType> = (props) => {
  const { classesList, totalCount, query, onSearch } = props;
  const { perPage, page } = query;
  const [array, setArray] = useState([] as Array<number>);

  const allPages =
    totalCount % perPage !== 0
      ? (totalCount - (totalCount % perPage)) / perPage + 1
      : totalCount / perPage;

  const onClickHandler = (pageNumber: number) => {
    if (pageNumber !== 0) {
      setArray(pagination(pageNumber));
      onSearch({
        ...query,
        page: pageNumber,
      });
    }
  };

  const pagination = (currentPage: number): Array<number> => {
    const result: Array<number> = [];

    if (allPages > 1 && allPages <= 10) {
      for (let i = 1; i <= 10; i++) {
        result.push(i);
      }
    } else {
      for (let i = 1; i <= allPages; i++) {
        if (
          i <= 2 ||
          (currentPage <= 5 && i <= 5) ||
          (i >= currentPage - 1 && i <= currentPage + 1) ||
          (currentPage > allPages - 5 && i > allPages - 5) ||
          i > allPages - 2
        ) {
          result.push(i);
        } else if (
          (currentPage > 5 && i === 3) ||
          (currentPage < allPages - 4 && i === allPages - 3)
        ) {
          result.push(0);
        }
      }
    }
    return result;
  };

  useEffect(() => {
    setArray(pagination(query.page));
  }, []);

  return (
    <ul className={`pagination ${classesList}`}>
      {allPages > 1 &&
        array.map((item) => {
          const classesList: Array<string> = [];
          if (item === page) {
            classesList.push('pagination__item--active');
          }
          if (item === 0) {
            classesList.push('pagination__item--no-click');
          }
          return (
            <li
              key={`${item}${Math.random()}${Math.random()}`}
              className={`pagination__item ${classesList.join(' ')}`}
              onClick={() => onClickHandler(item)}
            >
              {item !== 0 ? item : '...'}
            </li>
          );
        })}
    </ul>
  );
};

export default Pagination;
