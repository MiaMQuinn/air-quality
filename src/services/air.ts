import axios from 'axios';
import { AirData } from '../types/airData';

export const getAll = async (
    latitude: number, 
    longitude: number
): Promise<AirData> => {
    const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=european_aqi,pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,uv_index,grass_pollen&forecast_days=3`;
    const response = await axios.get<AirData>(url);
    return response.data;
}

export const getHourly = async (
    latitude: number, 
    longitude: number, 
    weatherVariable: string
): Promise<AirData> => {
    const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&hourly=${weatherVariable}&forecast_hours=5&past_hours=5`;
    const response = await axios.get<AirData>(url);
    return response.data;
};
