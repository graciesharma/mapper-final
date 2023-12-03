import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { View, Dimensions, Text, TouchableOpacity, Button } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import MapViewDirections from "react-native-maps-directions";
import * as Location from "expo-location";
import { GluestackUIProvider, Icon } from "./components";
import { config } from "./gluestack-ui.config";
import { styles } from "./styles";
import {
  PrimaryDetails,
  ViewDetailsModal,
} from "./components/Menu/ToiletDetails";
import useLocation from "./hooks/useLocation";
import { Toilet } from "./interfaces/Toilet";
import { ListIcon, MapIcon, MapPin, SearchIcon } from "lucide-react-native";
import SubmitButton from "./components/SubmitButton";
import navigateToMapsApp from "./utils/navigateToApp";
import ActionSheet from "./components/ActionSheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ToiletListModal from "./components/ToiletListModal";
import LinkButton from "./components/LinkButton";
import { AddIcon, Spinner } from "@gluestack-ui/themed";
import ToiletService from "./services/ToiletService";
import { ILLMap } from "./illustration";
import AddToiletModal from "./components/AddToiletModal";
import { GOOGLE_API_KEY } from "./environment";

export const { width, height } = Dimensions.get("window");

export const HEIGHT = height;

export default function App() {
  const [showToiletListModal, setShowToiletListModal] = useState(false);
  const [showAddToiletModal, setshowAddToiletModal] = useState(false);

  const [showDirections, setShowDirections] = useState(false);
  const [distance, setDistance] = useState(0);
  const [duration, setDuration] = useState(0);

  const mapRef = useRef<MapView>(null);

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [selectedToilets, setSelectedToilets] = useState<Array<Toilet>>(null);
  const [initialRegion, setInitialRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 5,
    longitudeDelta: 5,
  });

  const [isFetchingToilets, setIsFetchingToilets] = React.useState(false);

  const fetchLatLng = React.useCallback(() => {
    const currentLatitude = location?.coords?.latitude;
    const currentLongitude = location?.coords?.longitude;
    setIsFetchingToilets(true);
    ToiletService.getAll({ currentLatitude, currentLongitude })
      .then((value: any) => {
        setSelectedToilets(value);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => setIsFetchingToilets(false));
  }, [location]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
      setInitialRegion({
        latitude: location?.coords?.latitude || 0,
        longitude: location?.coords?.longitude || 0,
        latitudeDelta: 0.04,
        longitudeDelta: 0.04,
      });
      fetchLatLng();
    })();
  }, []);

  const traceRouteOnReady = (args: any) => {
    if (args) {
      setDistance(args.distance);
      setDuration(args.duration);
    }
  };

  const userLocation = useLocation();

  const [selectedToilet, setSelectedToilet] = React.useState<Toilet>(null);

  const handleMarkerPress = (toilet: Toilet) => {
    setSelectedToilet(toilet);
  };

  const ViewListButton = React.useCallback(() => {
    return (
      <TouchableOpacity
        style={{ ...styles.openModalButton, marginLeft: "auto" }}
        onPress={() => setShowToiletListModal(true)}
      >
        <Icon as={ListIcon} size="md" color="white" />
      </TouchableOpacity>
    );
  }, []);

  const ToiletAddButton = React.useCallback(() => {
    return (
      <TouchableOpacity
        style={{ ...styles.openModalButton, marginLeft: "auto" }}
        onPress={() => setshowAddToiletModal(true)}
      >
        <Icon as={AddIcon} size="md" color="white" />
      </TouchableOpacity>
    );
  }, []);

  const handleSearchForToilets = async () => {
    if (selectedToilets?.length > 0) {
      const bounds = selectedToilets.reduce(
        (acc, toilet) => {
          return {
            minLatitude: Math.min(acc.minLatitude, toilet.coords.latitude),
            maxLatitude: Math.max(acc.maxLatitude, toilet.coords.latitude),
            minLongitude: Math.min(acc.minLongitude, toilet.coords.longitude),
            maxLongitude: Math.max(acc.maxLongitude, toilet.coords.longitude),
          };
        },
        {
          minLatitude: Number.MAX_VALUE,
          maxLatitude: Number.MIN_VALUE,
          minLongitude: Number.MAX_VALUE,
          maxLongitude: Number.MIN_VALUE,
        }
      );

      const newRegion = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: Math.abs(bounds.maxLatitude - bounds.minLatitude) * 1.5,
        longitudeDelta:
          Math.abs(bounds.maxLongitude - bounds.minLongitude) * 1.5,
      };

      mapRef.current?.animateToRegion(newRegion, 1000);
    }
  };

  const onToiletAddSubmit = (data) => {
    ToiletService.create(data)
      .then((value: any) => {
        fetchLatLng();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <GluestackUIProvider config={config.theme}>
        <View style={styles.container}>
          <ViewDetailsModal
            details={selectedToilet}
            closeModalDetails={() => setSelectedToilet(null)}
            showDetailsModal={!!selectedToilet && !showDirections}
            onGetDirectionsPress={() => setShowDirections(true)}
          />

          {location ? (
            <View
              style={{
                ...styles.mapContainer,
                height: showDirections ? "66.66%" : "100%",
                top: 0,
              }}
            >
              <MapView
                ref={mapRef}
                style={styles.map}
                provider={PROVIDER_GOOGLE}
                initialRegion={initialRegion}
                showsUserLocation={true}
                zoomEnabled={true}
              >
                <Marker
                  coordinate={{
                    latitude: location?.coords?.latitude || 0,
                    longitude: location?.coords?.longitude || 0,
                  }}
                  title={userLocation}
                />

                {location && selectedToilet && showDirections && (
                  <MapViewDirections
                    origin={location?.coords}
                    destination={selectedToilet?.coords}
                    apikey={GOOGLE_API_KEY}
                    strokeColor="#232578"
                    strokeWidth={8}
                    onReady={traceRouteOnReady}
                  />
                )}
                {/* Render random markers  */}
                {!showDirections &&
                  selectedToilets?.map?.(
                    (marker, index) =>
                      marker.coords && (
                        <Marker
                          key={index}
                          coordinate={marker?.coords}
                          title={marker?.name}
                          onPress={() => handleMarkerPress(marker)}
                        >
                          <Icon as={ILLMap} />
                        </Marker>
                      )
                  )}
                {showDirections && (
                  <Marker coordinate={selectedToilet?.coords}>
                    <Icon as={MapPin} />
                  </Marker>
                )}
              </MapView>
            </View>
          ) : (
            <Spinner />
          )}
          <ActionSheet
            open={showDirections}
            onClose={() => {
              setShowDirections(false);
            }}
            actions={() => {
              return <ViewListButton />;
            }}
          >
            <PrimaryDetails {...selectedToilet} />
            <LinkButton
              text="View Details"
              onPress={() => setShowDirections(false)}
            />
            <View
              style={{
                marginTop: "auto",
              }}
            >
              <SubmitButton
                //  @ts-expect-error
                onPress={() => {
                  navigateToMapsApp(location?.coords, selectedToilet?.coords);
                }}
                text="Open In Google maps"
                icon={MapIcon}
              />
            </View>
          </ActionSheet>
          <View style={styles.buttonsContainer}>
            {selectedToilets?.length > 0 && !showDirections && (
              <>
                <ViewListButton />
                <ToiletAddButton />
              </>
            )}

            {!showDirections ? (
              <>
                <View style={styles.currentAddressContainer}>
                  <Text
                    style={{
                      color: "white",
                    }}
                  >
                    {userLocation ? userLocation : "Loading location..."}
                  </Text>
                </View>
                <SubmitButton
                  //  @ts-expect-error
                  onPress={handleSearchForToilets}
                  text="Search For Toilets Nearby"
                  icon={SearchIcon}
                  isLoading={isFetchingToilets}
                />
              </>
            ) : null}
          </View>
          <ToiletListModal
            toilets={selectedToilets}
            visible={showToiletListModal}
            onClose={() => setShowToiletListModal(false)}
            onToiletSelect={(toilet) => {
              setShowToiletListModal(false);
              setSelectedToilet(toilet);
            }}
          />
          <AddToiletModal
            visible={showAddToiletModal}
            onClose={() => setshowAddToiletModal(false)}
            onSubmit={onToiletAddSubmit}
          />
        </View>
      </GluestackUIProvider>
    </GestureHandlerRootView>
  );
}
