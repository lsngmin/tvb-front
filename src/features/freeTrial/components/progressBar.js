import React from 'react';
import classNames from 'classnames';

const ProgressBar = ({ progress, title }) => {
    const percentage = typeof progress === "string" ? 100 : Math.min(progress, 100);
    if(title === "Prediction Probability") progress = `${progress}%`;
    const progressBarClass = classNames({
        'rounded-full h-2 bg-teal-500': true,
        'w-0': percentage === 0, // 0%일 때
        'w-1/12': percentage > 0 && percentage <= 8.33, // 1 ~ 8.33%
        'w-2/12': percentage > 8.33 && percentage <= 16.66, // 8.34 ~ 16.66%
        'w-3/12': percentage > 16.66 && percentage <= 25, // 16.67 ~ 25%
        'w-4/12': percentage > 25 && percentage <= 33.33, // 25.01 ~ 33.33%
        'w-5/12': percentage > 33.33 && percentage <= 41.66, // 33.34 ~ 41.66%
        'w-6/12': percentage > 41.66 && percentage <= 50, // 41.67 ~ 50%
        'w-7/12': percentage > 50 && percentage <= 58.33, // 50.01 ~ 58.33%
        'w-8/12': percentage > 58.33 && percentage <= 66.66, // 58.34 ~ 66.66%
        'w-9/12': percentage > 66.66 && percentage <= 75, // 66.67 ~ 75%
        'w-10/12': percentage > 75 && percentage <= 83.33, // 75.01 ~ 83.33%
        'w-11/12': percentage > 83.33 && percentage <= 91.66, // 83.34 ~ 91.66%
        'w-full': percentage > 91.66, // 91.67 ~ 100%
    });

    return (
        <div className="relative p-4 mt-2">
            <div className="flex mb-2 items-center justify-between">
                <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
            {title}
          </span>
                </div>
                <div className="text-right">
          <span className="text-xs font-semibold inline-block text-teal-600">
            {progress}
          </span>
                </div>
            </div>
            <div className="flex rounded-full h-2 bg-gray-200">
                <div className={progressBarClass}></div>
            </div>
        </div>
    );
};

export default ProgressBar;
