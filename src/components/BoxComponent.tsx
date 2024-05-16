import * as React from 'react';
import '../index.css'

type BoxComponentProps = {
    data: number | undefined;
    units: string;
}

const BoxComponent: React.FC<BoxComponentProps>= ({data, units}) => {
    return (
        <div className="bg-white shadow rounded-lg flex flex-col items-center">
            <div className="text-4xl text-gray-700 font-bold pt-5">{data}</div>
            <div id="small-text" className="p-2" >{units}</div>
            <div className="bg-teal-400 rounded-b-lg p-1 flex-1 items-end w-full"></div>
        </div>
    );
}

export default BoxComponent;