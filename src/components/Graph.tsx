import * as React from 'react';
import * as airService from '../services/air';
import { getTwelveHourTime } from '../utils/getTwelveHourTime';
import { useLocation } from './App';
import { useEffect } from 'react';
import BarComponent from './BarComponent';
import leftArrow from './leftArrow.svg';
import { Link } from 'react-router-dom';

function Graph() {
    const { location, lat, long} = useLocation();
    const [hourlyData, setHourlyData] = React.useState<number[] | string[] | undefined>();
    const [hours, setHours] = React.useState<string[] | undefined>();

    console.log("location: " + location);
    useEffect(() => {
        if (!lat || !long) {
          return;
        }
        const fetchHourlyAirData = async () => {
          try {
            const fetchedAirData = await airService.getHourly(lat, long, "european_aqi");
            const hours = fetchedAirData?.hourly?.time;
            const times = hours?.map(getTwelveHourTime);
            setHours(times);
            setHourlyData(fetchedAirData.hourly?.european_aqi);
            setHours(times);
           } catch (e) {
            console.log('Error fetching hourly data');
          }
        };
        fetchHourlyAirData();
      }, [lat, long]);

    return (
        <div> 
            <div className='mt-4 ml-5'>
                <Link to={'/'}>
                    <img src={leftArrow} width={25} height={25} />
                </Link>
            </div>
            <div className='m-40'>
                <div className='grid grid-cols-10 space-x-4 items-end'>
                    {hourlyData?.map((item, index) => {
                        const hour = hours? hours[index]: "";
                        return (
                            <div className="text-center">
                                <BarComponent data={item} /> 
                                {hour}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Graph;
