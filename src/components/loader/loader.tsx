import React from 'react';
import './loader.scss';

type LoaderPropsType = {
  classesList?: string;
};

const Loader: React.FC<LoaderPropsType> = (props) => {
  const { classesList } = props;
  return <div className={`loader ${classesList}`}></div>;
};

export default Loader;
