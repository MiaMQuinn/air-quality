import {pollutantDictionary} from './pollutantDictionary';

export const changeColour = (pollutant: string, value?:number) => {
    const values = pollutantDictionary[pollutant];
    if(value && value < values[0]){
        return "rgb(16 185 129)";
    }else if(value && value < values[1]){
        return "rgb(250 204 21)";
    }else{
        return "rgb(239 68 68)";
    }
}
