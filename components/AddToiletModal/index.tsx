import {
  Checkbox,
  CheckboxGroup,
  CheckboxIcon,
  CheckboxIndicator,
  CheckboxLabel,
  Textarea,
  TextareaInput,
  VStack,
} from "@gluestack-ui/themed";
import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";
import { Box, CheckIcon, CloseIcon, Divider } from "../core";
import { ACCESSIBILITY } from "../../const/Accesibility";

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
  const [tags, setTags] = useState([]);

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
      tags: tags,
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
            margin: 10,
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
            margin: 10,
          }}
        >
          <TextareaInput
            placeholder="Description"
            onChangeText={handleToiletDescription}
          />
        </Textarea>

        <Box style={{ margin: 10 }}>
          <CheckboxGroup
            value={tags}
            onChange={(keys) => {
              setTags(keys);
            }}
          >
            {ACCESSIBILITY.map((value) => (
              <Checkbox
                key={value.id}
                value={value.value}
                isInvalid={false}
                isDisabled={false}
                aria-label="Tags"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  borderWidth: 1,
                  padding: 10,
                  borderRadius: 4,
                  borderColor: "#d1d6e5",
                  mb: 10,
                }}
              >
                <CheckboxIndicator
                  mr="$2"
                  sx={{
                    height: 20,
                    width: 20,
                    borderWidth: 1,
                    borderRadius: 4,
                  }}
                >
                  <CheckboxIcon
                    as={CheckIcon}
                    sx={{
                      backgroundColor: "#23256A",
                      color: "white",
                      marginRight: 20,
                    }}
                  />
                </CheckboxIndicator>
                <CheckboxLabel sx={{ color: "#0C121D" }}>
                  {value.label}
                </CheckboxLabel>
              </Checkbox>
            ))}
          </CheckboxGroup>
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
            margin: 10,
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
            margin: 10,
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
            margin: 10,
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
