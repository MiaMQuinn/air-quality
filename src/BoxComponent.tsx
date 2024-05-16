import * as React from 'react';
import './index.css'
type BoxComponentProps = {
    data: number;
    units: string;
}

const BoxComponent: React.FC<BoxComponentProps>= ({data, units}) => {
    return (
        <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center">
            <div className="text-4xl text-gray-700 font-bold">{data}</div>
            <div id="small-text" >{units}</div>
        </div>
    );
}

export default BoxComponent;