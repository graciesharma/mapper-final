import { useEffect, useState } from "react";
import * as Location from "expo-location";

export default function useLocation() {
  const [userLocation, setUserLocation] = useState(null);


  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();

        if (status === "granted") {
          const location = await Location.getCurrentPositionAsync({});
          const { latitude, longitude } = location.coords;

          const address = await Location.reverseGeocodeAsync({
            latitude,
            longitude,
          });

          const locationString = `${address?.[0]?.city}, ${address?.[0].region}`;
          setUserLocation(locationString);
        } else {
          console.log("Permission to access location was denied");
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return userLocation;
}
