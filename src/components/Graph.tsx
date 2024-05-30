import * as React from 'react';
import * as airService from '../services/air';
import { getTwelveHourTime } from '../utils/getTwelveHourTime';
import { useLocation } from './App';
import { useEffect } from 'react';
import BarComponent from './BarComponent';
import leftArrow from './leftArrow.svg';
import { Link } from 'react-router-dom';
import logo from './logo.png';

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
        <div id="template-text"> 
            <div className="flex float-right">
                <div id="large-text"  className="mr-2">
                {location}
                </div>
                <img src={logo} width={25} height={25} />
            </div>

            <Link to={'/'}>
                <img src={leftArrow} width={25} height={25} />
            </Link>
            <div className="grid grid-cols-1 m-40">
                <div className='grid grid-cols-10 space-x-4 items-end'>
                    {hourlyData?.map((item, index) => {
                        const hour = hours? hours[index]: "";
                        return (
                            <div className="text-center text-gray-600 ">
                                <BarComponent data={item} /> 
                                {hour}
                            </div>
                        );
                    })}
                </div>
                
                <hr className="my-20 h-0.5 border-t-0 dark:bg-white/10" />
                <div className="text-8xl text-gray-600 font-bold m-auto">
                    UV Index
                </div>
                <div className="ml-60 mr-60 mt-10 text-gray-500">
                    The UV Index is a measure of the intensity of ultraviolet radiation from the sun at the Earth's surface. It provides important information to help people prevent overexposure to UV rays, which can lead to sunburns, premature aging of the skin, and an increased risk of skin cancer.
                </div>
            </div>
        </div>
    )
}

export default Graph;
