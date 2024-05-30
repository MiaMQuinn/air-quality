import {pollutantDictionary} from './pollutantDictionary';

export const airQualityComment = (aqi: number|undefined) =>{
    const values = pollutantDictionary["european_aqi"];
    let result = "test";

    if(aqi && aqi < values[0]){
        return "Fair"
    }else if(aqi && aqi < values[1]){
        return "Medium"
    }else{
        console.log(aqi + " < " + values[2]);
        result = "Poor"
    }

    return result;
}
