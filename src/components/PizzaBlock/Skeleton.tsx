import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <div className="skeleton">
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={465}
      viewBox="0 0 280 465"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="134" cy="136" r="125" />
      <rect x="0" y="279" rx="10" ry="10" width="280" height="23" />
      <rect x="0" y="320" rx="10" ry="10" width="280" height="88" />
      <rect x="0" y="430" rx="10" ry="10" width="95" height="30" />
      <rect x="128" y="420" rx="24" ry="24" width="152" height="45" />
    </ContentLoader>
  </div>
);

export default Skeleton;
