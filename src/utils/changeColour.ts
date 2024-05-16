interface Dictionary{
    [key:string]:number[];
}

const dictionary:Dictionary = {
    carbon_monoxide: [160, 180, 190],
    european_aqi: [30, 40, 50],
    grass_pollen: [5, 10, 20],
    nitrogen_dioxide: [5, 20, 40],
    ozone: [11, 15, 20],
    pm2_5: [5, 14, 20],
    pm10: [5, 12, 16],
    sulphur_dioxide: [5, 10, 20],
    uv_index: [1, 3, 5]
}

export const changeColour = (pollutant: string, value:number): string => {
    const values = dictionary[pollutant];
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
