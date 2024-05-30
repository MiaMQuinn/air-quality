import * as React from 'react';
import '../index.css'
import { airQualityComment } from '../utils/airQualityComment';

type BarComponentProps = {
    data: string | number;
}

const BoxComponent: React.FC<BarComponentProps>= ({data}) => {

    let colour = "blue";
    const height = Number(data) * 7;

    const rating = airQualityComment(Number(data));
    if (rating === 'Fair') {
        colour = '#50CCAA';
    } else if (rating === 'Medium') {
        colour = '#FDBA74';
    } else {
        colour = '#DC2626';
    }

    return (
        <div style={{backgroundColor:colour}} className="rounded-lg flex flex-col items-center">
            <div style={{height:height}} className='square'></div>
        </div>
    );
}

export default BoxComponent;