import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen w-screen flex items-center justify-center absolute top-0 left-0 bg-white'>
            
            <span className="loading loading-ring loading-lg scale-150"></span>
        </div>
    );
};

export default Loading;
