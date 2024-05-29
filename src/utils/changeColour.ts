import {pollutantDictionary} from './pollutantDictionary';

export const changeColour = (pollutant: string, value: number | undefined) => {
    if (value === undefined) {
        return "rgb(250 204 21)";
    }

    const values = pollutantDictionary[pollutant];
    if(value < values[0]){
        return "rgb(16 185 129)";
    }else if(value < values[1]){
        return "rgb(250 204 21)";
    }else{
        return "rgb(239 68 68)";
    }
}
