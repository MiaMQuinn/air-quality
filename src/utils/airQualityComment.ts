import {pollutantDictionary} from './pollutantDictionary';

export const airQualityComment = (aqi: number): string =>{
    const values = pollutantDictionary["european_aqi"];
    let result = "test";

    if(Math.abs(aqi) < values[0]){
        result = "fair"
    }else if(Math.abs(aqi) < values[1]){
        result = "alright"
    }else{
        console.log(Math.abs(aqi) + " > " + values[1]);
        result = "poor"
    }

    return result;
}
