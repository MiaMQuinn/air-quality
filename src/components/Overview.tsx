import * as React from 'react';
import * as airService from '../services/air';
import BoxComponent from './BoxComponent';
import { getTwelveHourTime } from '../utils/getTwelveHourTime';
import { changeColour } from '../utils/changeColour';
import { AirData } from '../types/airData';
import { useLocation } from './App';
import { airQualityComment } from '../utils/airQualityComment';
import logo from './logo.png';
import BarComponent from './BarComponent';

function Overview() {
    const { location, lat, long} = useLocation();
    const [airData, setAirData] = React.useState<AirData|null>(null);
    const [airQuality, setAirQuality] = React.useState<number>();
    console.log(location, lat, long);

    React.useEffect(() => {
          const fetchAllAirData = async () => {
            try {
              const fetchedAirData = await airService.getAll(lat, long);
              setAirData(fetchedAirData);
              setAirQuality(airData?.current?.european_aqi);
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
          <div className="flex float-right">
            <div id="large-text"  className="mr-2">
            {location}
            </div>
            <img src={logo} width={25} height={25} />

          </div>
          
    
        <div className="grid grid-cols-1 m-20">
          <div style={{color:changeColour("european_aqi", airData?.current?.european_aqi)}} className="text-9xl font-bold m-auto">
            {airData?.current?.european_aqi}
          </div>
          <div style={{color:changeColour("european_aqi", airData?.current?.european_aqi)}}className="inter-font text-3xl font-bold m-auto">
            {airQualityComment(airQuality)}
          </div>
          <div id="large-text" className="inter-font m-auto">
            Air quality
          </div>
    
          <hr className="my-4 h-0.5 border-t-0 dark:bg-white/10" />
    
          <div className="grid grid-cols-4 gap-7 mx-32">
            <BoxComponent data={airData?.current?.pm10} units={"PM10"} colour={changeColour("pm10", airData?.current?.pm10)}/>
            <BoxComponent data={airData?.current?.pm2_5} units={"PM2.5"} colour={changeColour("pm2_5", airData?.current?.pm2_5)}/>
            <BoxComponent data={airData?.current?.carbon_monoxide} units={"CO"} colour={changeColour("carbon_monoxide", airData?.current?.carbon_monoxide)}/>
            <BoxComponent data={airData?.current?.nitrogen_dioxide} units={"NO2"} colour={changeColour("nitrogen_dioxide", airData?.current?.nitrogen_dioxide)}/>
            <BoxComponent data={airData?.current?.sulphur_dioxide} units={"SO2"} colour={changeColour("sulphur_dioxide", airData?.current?.sulphur_dioxide)}/>
            <BoxComponent data={airData?.current?.ozone} units={"O3"} colour={changeColour("ozone", airData?.current?.ozone)}/>
            <BoxComponent data={airData?.current?.uv_index} units={"UV"} colour={changeColour("uv_index", airData?.current?.uv_index)}/>
            <BoxComponent data={airData?.current?.grass_pollen} units={"Pollen"} colour={changeColour("grass_pollen", airData?.current?.grass_pollen)}/>
          </div>
        </div>
        </div>
      );
}

export default Overview;
