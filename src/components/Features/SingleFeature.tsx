import React from 'react';

const SingleFeature = ({ feature }) => {
  const { icon, title, description } = feature;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg flex flex-col items-center p-6 text-center">
      <div className="icon-container mb-4">
        <svg
          width={icon.width}
          height={icon.height}
          viewBox={icon.viewBox}
          fill={icon.fill}
          xmlns={icon.xmlns}
          className="text-blue-500"
        >
          <path d={icon.path.d} />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

export default SingleFeature;
