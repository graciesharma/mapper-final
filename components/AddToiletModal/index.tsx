import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Box, ChevronDownIcon, CloseIcon, Divider, Icon } from "../core";
import { Select, SelectIcon, SelectInput, SelectTrigger, Textarea, TextareaInput } from "@gluestack-ui/themed";
import { ScrollView } from "react-native-gesture-handler";
import CustomSelect from "../CustomSelect";

interface IProps {
  visible: boolean;
  onSubmit: (data: { name: string }, amValue: Date, pmValue: Date) => void;
  onClose: () => void;
}

const RestroomAddForm = ({ visible, onClose, onSubmit }: IProps) => {
  const [amValue, setAmValue] = useState(new Date());
  const [pmValue, setPmValue] = useState(new Date());
  const [latitude, setLatitude] = useState(27.705404499487766);
  const [longitude, setLongitude] = useState(85.304517365112275);
  const [locationName, setLocationName] = useState("Kathmandu");
  const [countryName, setCountryName] = useState("Nepal");
  const [images, setImages] = useState(null);
  const [name, setName] = useState("");

  // useEffect(() => {
  //   if (toiletId) {
  //   } else {
  //     setLatitude(27.705404499487766);
  //     setLongitude(85.304517365112275);
  //     setLocationName("Kathmandu");
  //     setCountryName("Nepal");
  //   }
  // }, [toiletId]);

  const onMarkerDragEnd = async (e) => {
    setLatitude(e.nativeEvent.coordinate.latitude);
    setLongitude(e.nativeEvent.coordinate.longitude);

    try {
    } catch (error) {
      console.error("Error fetching location name:", error);
    }
  };

  const onHandleSubmit = () => {
    const data = {
      name,
    };
    onSubmit(data, amValue, pmValue);
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
          <TextareaInput placeholder="Toilet Name" />
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
          <TextareaInput placeholder="Description" />
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
          <TextareaInput placeholder="Longitude" />
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
          <TextareaInput placeholder="Latitude" />
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
          <TextareaInput placeholder="Location" />
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
