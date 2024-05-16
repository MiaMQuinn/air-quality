import * as React from 'react';
import * as airService from '../services/air';
import BoxComponent from './BoxComponent';
import { getTwelveHourTime } from '../utils/getTwelveHourTime';
import { AirData } from '../types/airData';
import { useLocation } from './App';

function Overview() {
    const { location, lat, long} = useLocation();
    const [airData, setAirData] = React.useState<AirData|null>(null);
    console.log(location, lat, long);

    React.useEffect(() => {
          const fetchAllAirData = async () => {
            try {
              const fetchedAirData = await airService.getAll(lat, long);
              setAirData(fetchedAirData);
            } catch (e) {
              console.log('Error fetching air data');
            }
          }
    
          // TEST: DELETE LATER
          const fetchHourlyAirData = async () => {
            try {
              const fetchedAirData = await airService.getHourly(lat, long, 'pm10');
              console.log('Hourly:', fetchedAirData);
              if (fetchedAirData.hourly) {
                const hours = fetchedAirData.hourly.time;
                const times = hours.map(getTwelveHourTime);
                console.log(times);
              }
            } catch (e) {
              console.log('Error fetching hourly data');
            }
          }
      
          fetchAllAirData();
          fetchHourlyAirData();
    }, [long, lat]);

    return (
        <div id="template-text">
          <div id="large-text"  className="text-right mr-10">
          {location}
          </div>
    
        <div className="grid grid-cols-1 m-20">
          <div className="text-9xl text-teal-400 font-bold m-auto">
            {airData?.current?.european_aqi}
          </div>
          <div className="text-3xl text-teal-400 font-bold m-auto">
            Fair
          </div>
          <div id="large-text" className="m-auto">
            Air quality
          </div>
    
          <hr className="my-4 h-0.5 border-t-0 dark:bg-white/10" />
    
          <div className="grid grid-cols-4 gap-7 mx-32">
            <BoxComponent data={airData?.current?.pm10} units={"PM10"}/>
            <BoxComponent data={airData?.current?.pm2_5} units={"PM2.5"}/>
            <BoxComponent data={airData?.current?.carbon_monoxide} units={"CO"}/>
            <BoxComponent data={airData?.current?.nitrogen_dioxide} units={"NO2"}/>
            <BoxComponent data={airData?.current?.sulphur_dioxide} units={"SO2"}/>
            <BoxComponent data={airData?.current?.ozone} units={"O3"}/>
            <BoxComponent data={airData?.current?.uv_index} units={"UV"}/>
            <BoxComponent data={airData?.current?.grass_pollen} units={"Pollen"}/>
          </div>
        </div>
        </div>
      );
};

export default Overview;
