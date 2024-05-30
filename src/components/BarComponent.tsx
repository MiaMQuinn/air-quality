import * as React from 'react';
import '../index.css'
import { airQualityComment } from '../utils/airQualityComment';
import { VariableKey } from '../types/airData';

type BarComponentProps = {
    data: string | number;
    variableKey: VariableKey;
    normalizedData: number;
}

const BoxComponent: React.FC<BarComponentProps>= ({ data, normalizedData, variableKey }) => {

    let colour = "blue";
    const height = Number(normalizedData) * 1000;

    const rating = airQualityComment(variableKey, Number(data));
    if (rating === 'Fair') {
        colour = '#50CCAA';
    } else if (rating === 'Medium') {
        colour = '#FDBA74';
    } else {
        colour = '#DC2626';
    }

    return (
        <div style={{backgroundColor:colour}} className="rounded-t-lg">
            <div style={{height:height}} className='square'></div>
        </div>
    );
}

export default BoxComponent;