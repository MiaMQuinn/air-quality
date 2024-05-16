import {pollutantDictionary} from './pollutantDictionary';

export const changeColour = (pollutant: string, value:number): string => {
    const values = pollutantDictionary[pollutant];
    let colour: string = "";
    if(Math.abs(value) < values[0]){
        colour = "rgb(16 185 129)";
    }else if(Math.abs(value) < values[1]){
        colour = "rgb(250 204 21)";
    }else{
        console.log(Math.abs(value) + " > " + values[1]);
        colour = "rgb(239 68 68)";
    }
    return colour;
}
