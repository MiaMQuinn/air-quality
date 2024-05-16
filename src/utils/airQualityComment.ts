import {pollutantDictionary} from './pollutantDictionary';

export const airQualityComment = (aqi: number): string =>{
    const values = pollutantDictionary["european_aqi"];
    let result = "test";

    if(Math.abs(aqi) < values[0]){
        result = "Fair"
    }else if(Math.abs(aqi) < values[1]){
        result = "Alright"
    }else{
        console.log(Math.abs(aqi) + " > " + values[1]);
        result = "Poor"
    }

    return result;
}
