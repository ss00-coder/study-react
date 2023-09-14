import React from 'react';
import Result from '../components/Result';

const ResultContainer = ({total}) => {
  return (
    <div className="result-wrap">
      <Result total={total} />
    </div>
  );
};

export default ResultContainer;