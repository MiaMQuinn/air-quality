export interface CurrentUnits {
    time: string;
    interval: string;
    european_aqi: string;
    pm10: string;
    pm2_5: string;
    carbon_monoxide: string;
    nitrogen_dioxide: string;
    sulphur_dioxide: string;
    ozone: string;
    uv_index: string;
    grass_pollen: string;
}

export interface Current {
    time: string;
    interval: number;
    european_aqi: number;
    pm10: number;
    pm2_5: number;
    carbon_monoxide: number;
    nitrogen_dioxide: number;
    sulphur_dioxide: number;
    ozone: number;
    uv_index: number;
    grass_pollen: number;
}

export interface AirData {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_units: CurrentUnits;
    current: Current;
}

export interface DataWrapper {
    data: AirData;
}