import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

const CurrentLocation = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if(location) return;
    Geolocation?.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      error => {
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }, []);

  return (

    <Text>
      <CurrentLocation/>
      {location
        ? `Latitude: ${location.latitude}, Longitude: ${location.longitude}`
        : 'Fetching location...'}
    </Text>
  );
};

export default CurrentLocation;