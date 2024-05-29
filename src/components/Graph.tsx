import * as React from 'react';
import * as airService from '../services/air';
import { getTwelveHourTime } from '../utils/getTwelveHourTime';
import { useLocation } from './App';
import { useEffect } from 'react';
import BarComponent from './BarComponent';

function Graph() {
    const { location, lat, long} = useLocation();
    const [hourlyData, setHourlyData] = React.useState<number[] | string[] | undefined>();
    const [hours, setHours] = React.useState<string[] | undefined>();

    useEffect(() => {
        const getAllData = async () => {
            const fetchedHourlyData = await airService.getHourly(lat, long, "european_aqi");
            console.log(fetchedHourlyData);
            const hours = fetchedHourlyData?.hourly?.time;
            const times = hours?.map(getTwelveHourTime);
            setHourlyData(fetchedHourlyData.hourly?.european_aqi);
            setHours(times);
        }
        getAllData();
    },[])

    return (
         <div>
            {hourlyData?.map((item, index) => {
                const hour = hours? hours[index]: "";
                return (
                    <div>
                        <BarComponent data={item} /> 
                        {hour}
                    </div>
                );
            })}
        </div>
      );
}

export default Graph;
