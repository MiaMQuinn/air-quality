import axios from 'axios';
import { LocationData } from '../types/locationData';

export const getLocation = async (latitude: number, longitude: number): Promise<string> => {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`;
    const response = await axios.get(url);
    const data = response.data as LocationData;
    const address = data.address;
    return address.city + ', ' + address.state;
};
