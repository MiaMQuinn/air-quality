interface Dictionary{
    [key:string]:number[];
}

const dictionary:Dictionary = {
    carbon_monoxide: [160, 180, 190],
    european_aqi: [5, 10, 20],
    grass_pollen: [5, 10, 20],
    interval: [5, 10, 20],
    nitrogen_dioxide: [5, 10, 20],
    ozone: [11, 15, 20],
    pm2_5: [5, 10, 20],
    pm10: [5, 10, 20],
    sulphur_dioxide: [5, 10, 20],
    time: [5, 10, 20],
    uv_index: [5, 10, 20]
}

export const changeColour = (pollutant: string, value:number): string => {
    const values = dictionary[pollutant];
    let colour: string = "";
    if(value < values[0]){
        colour = "green";
    }else if(value < values[1]){
        colour = "amber";
    }else{
        colour = "red";
    }
    return colour;
}
