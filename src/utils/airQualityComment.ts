import {pollutantDictionary} from './pollutantDictionary';

export const airQualityComment = (pollutant: string, value: number | undefined) =>{
    const values = pollutantDictionary[pollutant];
    let result = "test";

    if(value && value < values[0]){
        return "Fair"
    }else if(value && value < values[1]){
        return "Medium"
    }else{
        console.log(value + " < " + values[2]);
        result = "Poor"
    }

    return result;
}
