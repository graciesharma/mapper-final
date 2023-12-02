import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Icon } from "./core";
import { Spinner } from "@gluestack-ui/themed";

const SubmitButton: React.FC = (props: {
  onPress: () => void;
  text: string;
  icon: typeof Icon;
  isLoading?: boolean;
}) => {
  const { icon: D } = props;
  return (
    <TouchableOpacity
      disabled={props.isLoading}
      style={styles.button}
      onPress={props?.onPress}
    >
      {props.isLoading && (
        <Spinner
          color="white"
          style={{
            position: "absolute",
            marginRight: "auto",
            left: 20,
          }}
        />
      )}

      <Icon
        as={D}
        color="white"
        style={{
          marginRight: 4,
        }}
      />
      <Text style={styles.buttonText}>{props?.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#262758",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    display: "flex",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    position: "relative",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    marginRight: 8,
  },
});

export default SubmitButton;
