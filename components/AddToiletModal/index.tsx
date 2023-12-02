import React from "react";
import { Modal, TouchableOpacity, View, StatusBar } from "react-native";
import { CloseIcon, Text } from "@gluestack-ui/themed";
import { Box, Divider } from "../core";

interface IProps {
  visible: boolean;
  onClose: () => void;
}

const AddToiletModal = ({ visible, onClose }: IProps) => {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      style={{ padding: 20, margin: 20 }}
    >
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
      {/*  wrap whole content around the box */}

      <Box padding={20}>
        <Text>
          Your contribution can improve sanitation awareness and accessibility
          for everyone.
        </Text>
      </Box>
    </Modal>
  );
};

export default AddToiletModal;
