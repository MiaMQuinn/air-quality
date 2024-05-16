import * as React from 'react';
import './index.css'
type BoxComponentProps = {
    data: string;
    units: string;
}

const BoxComponent: React.FC<BoxComponentProps>= ({data, units}) => {
    return (
        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center">
            <div className="text-4xl text-gray-800 font-bold">{data}</div>
            <div id="default-text">{units}</div>
        </div>
    );
}

export default BoxComponent;