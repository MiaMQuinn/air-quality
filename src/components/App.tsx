import * as React from 'react';
import { Outlet, useNavigate, useOutletContext } from 'react-router-dom';
import { getLocation } from '../services/location';

interface ContextType {
  location: string,
  long: number,
  lat: number,
}

function App() {
  const navigate = useNavigate();
  const [location, setLocation] = React.useState('');
  const [lat, setLat] = React.useState<number | null>(null);
  const [long, setLong] = React.useState<number | null>(null);
  console.log(location);
  
  React.useEffect(() => {
    const success = (position: GeolocationPosition) => {
      const coords = position.coords;
      setLat(coords.latitude);
      setLong(coords.longitude);

      const fetchLocation = async () => {
        try {
          const fetchedLocation = await getLocation(coords.latitude, coords.longitude);
          setLocation(fetchedLocation);
        } catch (e) {
          console.log('Error fetching location');
        }
      };
  
      fetchLocation();
    }

    const error = () => {
      console.log('hello');
      navigate('/location-disabled');
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return (
    <Outlet context={{ location, long, lat }}/>
  )
}

export default App;

export function useLocation() {
  return useOutletContext<ContextType>();
}
