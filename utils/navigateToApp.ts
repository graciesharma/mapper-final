import { Linking, Platform } from "react-native";
import { LatLng } from "react-native-maps";

const navigateToMapsApp = (source: LatLng, destination: LatLng) => {
  const { latitude: sourceLat, longitude: sourceLng } = source;
  const { latitude: destinationLat, longitude: destinationLng } = destination;

  const sourceLocation = `${sourceLat},${sourceLng}`;
  const destinationLocation = `${destinationLat},${destinationLng}`;

  let url = "";

  if (Platform.OS === "ios") {
    // For iOS, use Apple Maps
    url = `http://maps.apple.com/?saddr=${sourceLocation}&daddr=${destinationLocation}`;
  } else {
    // For Android or any other platform, use Google Maps
    url = `https://www.google.com/maps/dir/?api=1&origin=${sourceLocation}&destination=${destinationLocation}`;
  }

  Linking.canOpenURL(url)
    .then((supported) => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.error(`Cannot open URL: ${url}`);
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export default navigateToMapsApp;
