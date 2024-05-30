export interface NumberDictionary {
    [key:string]: number[];
}

export const pollutantDictionary: NumberDictionary = {
    carbon_monoxide: [160, 180, 190],
    european_aqi: [25, 30, 40],
    grass_pollen: [5, 10, 20],
    nitrogen_dioxide: [5, 20, 40],
    ozone: [11, 15, 20],
    pm2_5: [5, 14, 20],
    pm10: [5, 10, 16],
    sulphur_dioxide: [5, 10, 20],
    uv_index: [1, 3, 5]
}

export interface StringDictionary {
    [key: string]: string;
}

export const pollutantNameDictionary: StringDictionary = {
    carbon_monoxide: 'Carbon Monoxide',
    european_aqi: 'European AQI',
    grass_pollen: 'Grass Pollen',
    nitrogen_dioxide: 'Nitrogen Dioxide',
    ozone: 'Ozone',
    pm2_5: 'PM2.5',
    pm10: 'PM10',
    sulphur_dioxide: 'Sulphur Dioxide',
    uv_index: 'UV Index',
}
