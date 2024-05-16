import * as React from 'react';
import { getLocation } from './services/location';
import { getAirData } from './services/airData';

import BoxComponent from './BoxComponent';
import { AirData } from './types';

function App() {
  const [location, setLocation] = React.useState('');
  const [airData, setAirData] = React.useState<AirData|null>(null);
  console.log(location);
  console.log(airData);
  
  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;

      const fetchLocation = async () => {
        try {
          const fetchedLocation = await getLocation(coords.latitude, coords.longitude);
          setLocation(fetchedLocation);
        } catch (e) {
          console.log('Error fetching location');
        }
      };

      const fetchAirData = async () => {
        try {
          const fetchedAirData = await getAirData(coords.latitude, coords.longitude);
          setAirData(fetchedAirData);
        } catch (e) {
          console.log('Error fetching air data');
        }
      }
  
      fetchLocation();
      fetchAirData();
    });
  }, []);

  return (
    <div id="template-text">
      <div id="large-text"  className="text-right mr-10">
      {location}
      </div>

    <div className="grid grid-cols-1 m-20">
      <div className="text-9xl text-teal-400 font-bold m-auto">
        20
      </div>
      <div className="text-3xl text-teal-400 font-bold m-auto">
        Fair
      </div>
      <div id="large-text" className="m-auto">
        Air quality
      </div>

      <div className="grid grid-cols-4 gap-4">
        <BoxComponent data={airData?.current.pm10} units={"PM10"}/>
        <BoxComponent data={airData?.current.pm2_5} units={"PM2.5"}/>
        <BoxComponent data={airData?.current.carbon_monoxide} units={"CO"}/>
        <BoxComponent data={airData?.current.nitrogen_dioxide} units={"NO2"}/>
        <BoxComponent data={airData?.current.sulphur_dioxide} units={"SO2"}/>
        <BoxComponent data={airData?.current.ozone} units={"O3"}/>
        <BoxComponent data={airData?.current.uv_index} units={"UV"}/>
        <BoxComponent data={airData?.current.grass_pollen} units={"Pollen"}/>
      </div>
    </div>
    </div>
  );
}

export default App;
