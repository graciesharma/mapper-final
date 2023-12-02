import React, { useState } from "react";
import { Modal, TouchableOpacity, View, StatusBar } from "react-native";
import {
  Box,
  Button,
  Text,
  Textarea,
  TextareaInput,
} from "@gluestack-ui/themed";
import { AirbnbRating } from "react-native-ratings";
import { CloseIcon, Divider } from "../core";

interface IProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: any;
}

const Review = ({ visible, onClose, onSubmit }: IProps) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [description, setDescription] = useState("");

  const handleFullNameChange = (text: string) => {
    setFullName(text);
  };

  const handleEmailAddress = (text: string) => {
    setEmail(text);
  };

  const handleToiletDescription = (text: string) => {
    setDescription(text);
  };

  const handleSubmit = () => {
    onSubmit({
      fullName,
      email,
      rating,
      description,
    });
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      style={{ padding: 20, margin: 20 }}
    >
      {/* Set the status bar background color */}
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 15,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "600" }}>Write a review</Text>

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
      <Box>
        <Text
          color="black"
          sx={{ m: 15, fontSize: 16, fontWeight: "$semibold" }}
        >
          Your opinion means the world to us, and we appreciate the time you’re
          taking to leave a review.
        </Text>
      </Box>

      <Text sx={{ m: 15, fontSize: 20, fontWeight: "$bold" }}>
        Please provide your information
      </Text>
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
          placeholder="Full name"
          onChangeText={handleFullNameChange}
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
          placeholder="Contact email address"
          onChangeText={handleEmailAddress}
        />
      </Textarea>

      <Text sx={{ m: 15, fontSize: 20, fontWeight: "$bold" }}>
        How would you rate this washroom?
      </Text>

      <View style={{ alignItems: "flex-start", margin: 15 }}>
        <AirbnbRating
          count={5}
          defaultRating={0}
          showRating={false}
          selectedColor="#FAC712"
          size={30}
          onFinishRating={(value) => setRating(value)}
        />
      </View>

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
          placeholder="Add something about your experience"
          onChangeText={handleToiletDescription}
        />
      </Textarea>

      <View
        style={{
          padding: 15,
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "auto",
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
          onPress={handleSubmit}
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
    </Modal>
  );
};

export default Review;
