import { Textarea, TextareaInput } from "@gluestack-ui/themed";
import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import { Box, CloseIcon, Divider } from "../core";

interface IProps {
  visible: boolean;
  onSubmit: any;
  onClose: () => void;
}

const RestroomAddForm = ({ visible, onClose, onSubmit }: IProps) => {
  const [latitude, setLatitude] = useState(27.705404499487766);
  const [longitude, setLongitude] = useState(85.304517365112275);
  const [locationName, setLocationName] = useState("Kathmandu");
  const [countryName, setCountryName] = useState("Nepal");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const onMarkerDragEnd = async (e) => {
    setLatitude(e.nativeEvent.coordinate.latitude);
    setLongitude(e.nativeEvent.coordinate.longitude);

    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${e.nativeEvent.coordinate.latitude},${e.nativeEvent.coordinate.longitude}&key=AIzaSyCkWaxfKNAgjBQHtGKW_rQg6uPnr-zzgFg`
      );
      const data = await response.json();
      if (data.results.length > 0) {
        const addressResult = data.results[0];

        const locationNameData = addressResult.address_components.filter(
          (component) => component.types.includes("locality")
        );

        const countryNameData = addressResult.address_components.filter(
          (component) => component.types.includes("country")
        );

        setLocationName(locationNameData[0].long_name);
        setCountryName(countryNameData[0].long_name);
      }
    } catch (error) {
      console.error("Error fetching location name:", error);
    }
  };

  const handleToiletDescription = (text: string) => {
    setDescription(text);
  };

  const handleNameChange = (text: string) => {
    setName(text);
  };

  const onHandleSubmit = () => {
    onSubmit({
      locationName: locationName,
      address: `${locationName}, ${countryName}`,
      countryName: countryName,
      coords: {
        latitude,
        longitude,
      },
      description: description,
      name: name,
      openingTime: "8:00",
      closingTime: "20:00",
      tags: "Gender Neutral",
    });
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      style={{ padding: 20, margin: 20 }}
    >
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 15,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "600" }}>Add a toilet</Text>

          <TouchableOpacity
            onPress={onClose}
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text style={{ marginRight: 10 }}></Text>
            <CloseIcon size="xl" color="black" />
          </TouchableOpacity>
        </View>

        <Divider />
        <Box padding={15}>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            Your contribution can improve sanitation awareness and accessibility
            for everyone.
          </Text>
        </Box>

        <Textarea
          isReadOnly={false}
          isInvalid={false}
          isDisabled={false}
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 8,
            borderColor: "#d1d6e5",
            margin: 15,
          }}
        >
          <TextareaInput
            placeholder="Toilet Name"
            onChangeText={handleNameChange}
          />
        </Textarea>

        {/* tags */}

        <Textarea
          isReadOnly={false}
          isInvalid={false}
          isDisabled={false}
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 8,
            borderColor: "#d1d6e5",
            margin: 15,
          }}
        >
          <TextareaInput
            placeholder="Description"
            onChangeText={handleToiletDescription}
          />
        </Textarea>

        <Textarea
          isReadOnly={false}
          isInvalid={false}
          isDisabled={false}
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 8,
            borderColor: "#d1d6e5",
            margin: 15,
          }}
        >
          <TextareaInput
            placeholder="Longitude"
            value={longitude.toString()}
            editable={false}
          />
        </Textarea>

        <Textarea
          isReadOnly={false}
          isInvalid={false}
          isDisabled={false}
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 8,
            borderColor: "#d1d6e5",
            margin: 15,
          }}
        >
          <TextareaInput
            placeholder="Latitude"
            value={latitude.toString()}
            editable={false}
          />
        </Textarea>

        <Textarea
          isReadOnly={false}
          isInvalid={false}
          isDisabled={false}
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 8,
            borderColor: "#d1d6e5",
            margin: 15,
          }}
        >
          <TextareaInput
            placeholder="Location"
            value={locationName}
            editable={false}
          />
        </Textarea>

        <View style={{ padding: 20 }}>
          {/* 
        <DateTimePicker
          value={amValue}
          mode="time"
          display="default"
          onChange={(event, selectedDate) => setAmValue(selectedDate)}
        /> */}

          <MapView
            style={{ width: "100%", height: 400 }}
            initialRegion={{
              latitude: latitude,
              longitude: longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{ latitude: latitude, longitude: longitude }}
              draggable
              onDragEnd={onMarkerDragEnd}
            />
          </MapView>

          <TouchableOpacity onPress={onHandleSubmit}>
            <View
              style={{
                marginTop: 20,
                backgroundColor: "#262758",
                padding: 10,
                borderRadius: 8,
              }}
            >
              <Text style={{ color: "white", textAlign: "center" }}>
                Submit
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Modal>
  );
};

export default RestroomAddForm;
