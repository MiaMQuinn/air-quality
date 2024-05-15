import * as React from 'react';
import './index.css'

const BoxComponent = ({data}) => {
    console.log({data}.data.current);
    return (
        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center">
            <div className="text-4xl text-gray-800 font-bold"></div>
            <div id="default-text">Some text here</div>
        </div>
    );
}

export default BoxComponent;