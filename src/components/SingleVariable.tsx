import * as React from 'react';
import { useLocation } from "./App";
import * as airService from '../services/air';
import { AirData } from '../types/airData';
import { useParams } from 'react-router-dom';

function SingleVariable() {
  const { weatherVariable } = useParams();
  const { location, lat, long } = useLocation();
  const [hourlyData, setHourlyData] = React.useState<AirData | null>(null);
  console.log(hourlyData);

  React.useEffect(() => {
    if (!weatherVariable || !lat || !long) {
      return;
    }

    const fetchHourlyAirData = async () => {
      try {
        const fetchedAirData = await airService.getHourly(lat, long, weatherVariable);
        setHourlyData(fetchedAirData)
       } catch (e) {
        console.log('Error fetching hourly data');
      }
    };

    fetchHourlyAirData();
  }, [weatherVariable, lat, long]);

  return (
    <div>Single weather variable view</div>
  )
}

export default SingleVariable;