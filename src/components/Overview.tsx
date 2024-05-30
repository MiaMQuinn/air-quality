import * as React from 'react';
import * as airService from '../services/air';
import BoxComponent from './BoxComponent';
import { changeColour } from '../utils/changeColour';
import { AirData, Variable, VariableKey } from '../types/airData';
import { useLocation } from './App';
import { airQualityComment } from '../utils/airQualityComment';
import logo from './logo.png';
import { Link } from 'react-router-dom';
import barChart from './barChart.svg';

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
    
          fetchAllAirData();
    }, [long, lat]);

    const getData = (variableName: VariableKey) => {
      if (variableName && airData?.current) {
        return airData.current[variableName]
      }

      return;
    };

    return (
        <div id="template-text">

          <div className="flex float-right">
            <div id="large-text"  className="mr-2">
            {location}
            </div>
            <img src={logo} width={25} height={25} />
          </div>

          <Link to={'/Graph'}>
            <img src={barChart} width={25} height={25} />
          </Link>
    
        <div className="grid grid-cols-1 m-20">
          <div style={{color:changeColour("european_aqi", airData?.current?.european_aqi)}} className="text-9xl font-bold m-auto">
            {airData?.current?.european_aqi}
          </div>
          <div style={{color:changeColour("european_aqi", airData?.current?.european_aqi)}}className="inter-font text-3xl font-bold m-auto">
            {airQualityComment("european_aqi", airData?.current?.european_aqi)}
          </div>
          <div id="large-text" className="inter-font m-auto">
            Air quality
          </div>
    
          <hr className="my-4 h-0.5 border-t-0 dark:bg-white/10" />
    
          <div className="grid grid-cols-4 gap-7 mx-32">
            {
              subVariables.map(variable =>
                <Link to={variable.key}>
                  <BoxComponent data={getData(variable.key)} units={variable.name} colour={changeColour(variable.key, getData(variable.key))}/>
                </Link>
              )
            }
          </div>
        </div>
        </div>
      );
}

const subVariables: Variable[] = [
  {
    name: "PM10",
    key: "pm10",
  },
  {
    name: "PM2.5",
    key: "pm2_5",
  },
  {
    name: "CO",
    key: "carbon_monoxide",
  },
  {
    name: "NO2",
    key: "nitrogen_dioxide",
  },
  {
    name: "SO2",
    key: "sulphur_dioxide",
  },
  {
    name: "O3",
    key: "ozone",
  },
  {
    name: "UV",
    key: "uv_index",
  },
  {
    name: "Pollen",
    key: "grass_pollen",
  }
];

export default Overview;
