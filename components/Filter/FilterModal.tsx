import React from "react";
import { Modal, TouchableOpacity, View } from "react-native";

import {
  Box,
  Button,
  CheckIcon,
  Text,
  Checkbox,
  CheckboxIndicator,
  CheckboxIcon,
  CheckboxLabel,
  CheckboxGroup,
} from "@gluestack-ui/themed";
import { CloseIcon, Divider } from "../core";

import { AirbnbRating, Rating } from "react-native-ratings";
import { ACCESSIBILITY } from "../../const/Accesibility";

interface IProps {
  visible: boolean;
  onClose: () => void;
}

const PROXIMITY_WITHIN = [
  {
    id: "500m",
    value: "500",
    label: "500m",
  },
  {
    id: "1km",
    value: "1000",
    label: "1km",
  },
];

const Filter = ({ visible, onClose }: IProps) => {
  const [values, setValues] = React.useState([]);
  return (
    <Modal visible={visible} animationType="slide" style={{ padding: 20 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 15,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "600" }}>All Filters</Text>

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

      <View style={{ padding: 20 }}>
        <Box>
          <Text sx={{ mb: 10, fontSize: 20, fontWeight: "$bold" }}>
            Accesiblity Features
          </Text>
          <CheckboxGroup
            value={values}
            onChange={(keys) => {
              setValues(keys);
            }}
          >
            {ACCESSIBILITY.map((value) => (
              <Checkbox
                key={value.id}
                value={value.value}
                isInvalid={false}
                isDisabled={false}
                aria-label="Accessibility Features"
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
        <View style={{ alignItems: "flex-start", marginTop: 10 }}>
          <Text sx={{ mb: 10, fontSize: 20, fontWeight: "$bold" }}>Rating</Text>
          <AirbnbRating
            count={5}
            defaultRating={0}
            showRating={false}
            selectedColor="#FAC712"
            size={30}
          />
        </View>
        <View
          style={{
            padding: 10,
            display: "flex",
            justifyContent: "flex-end",
            marginTop: 8,
            width: "100%",
            gap: 25,
            flexDirection: "row",
          }}
        >
          <Button
            backgroundColor="#D83F31"
            style={{
              padding: 10,
              width: 100,
              borderRadius: 20,
              marginRight: 10,
            }}
            onPress={onClose}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
              }}
            >
              Cancel
            </Text>
          </Button>
          <Button
            backgroundColor="#23256A"
            style={{
              padding: 10,
              width: 100,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
              }}
            >
              Submit
            </Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

export default Filter;
