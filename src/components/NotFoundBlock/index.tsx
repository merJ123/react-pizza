import React from 'react';

import _ from './NotFoundBlock.module.scss';

const NotFoundBlock: React.FC = () => {
  return (
    <div className={_.root}>
      <h1>
        <span>😕</span>
        <br />
        Not Found
      </h1>
      <p className={_.description}>
        К сожалению данная страница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
}

export default NotFoundBlock;
