import * as React from 'react';
import * as airService from '../services/air';
import { getTwelveHourTime } from '../utils/getTwelveHourTime';
import { useLocation } from './App';
import { useEffect } from 'react';
import BarComponent from './BarComponent';
import leftArrow from './leftArrow.svg';
import { Link, useParams } from 'react-router-dom';
import logo from './logo.png';
import { AirData, VariableKey } from '../types/airData';
import { pollutantNameDictionary } from '../utils/pollutantDictionary';

function Graph() {
    const { weatherVariable } = useParams() as { weatherVariable: VariableKey };
    const { location, lat, long} = useLocation();
    const [hourlyData, setHourlyData] = React.useState<number[] | string[] | undefined>();
    const [normalizedData, setNormalizedData] = React.useState<number[]>([]);
    const [hours, setHours] = React.useState<string[] | undefined>();

    const getHourlyData = (airData: AirData, variableName: VariableKey) => {
        if (variableName && airData?.hourly) {
            return airData.hourly[variableName]
        }

        return;
    };
    
    const normalize = (data: number[] | string[] | undefined) => {
        if (!data) {
            return;
        }

        data = data.map(val => Number(val));
        const total = data.reduce((acc, curr) => acc + curr);
        return data.map(val => val / total);
    }

    useEffect(() => {
        if (!lat || !long) {
          return;
        }
        const fetchHourlyAirData = async () => {
          try {
            if (weatherVariable) {
                const fetchedAirData = await airService.getHourly(lat, long, weatherVariable);
                console.log('Hourly data: ', fetchedAirData);
                const hours = fetchedAirData?.hourly?.time;
                const times = hours?.map(getTwelveHourTime);
                setHours(times);
                const unnormalizedData = getHourlyData(fetchedAirData, weatherVariable);
                const normalizedData = normalize(unnormalizedData);
                setHourlyData(unnormalizedData);
                if (normalizedData) {
                    setNormalizedData(normalizedData);
                }
                setHours(times);
            }
           } catch (e) {
            console.log('Error fetching hourly data');
          }
        };
        fetchHourlyAirData();
      }, [lat, long, weatherVariable]);

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
                                <BarComponent data={item} normalizedData={normalizedData[index]} variableKey={weatherVariable}/> 
                                {hour}
                            </div>
                        );
                    })}
                </div>
                
                <hr className="my-20 h-0.5 border-t-0 dark:bg-white/10" />
                <div className="text-8xl text-gray-600 font-bold m-auto">
                    {pollutantNameDictionary[weatherVariable]}
                </div>
            </div>
        </div>
    )
}

export default Graph;
