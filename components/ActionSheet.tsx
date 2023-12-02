import React, { ReactNode, useEffect, useRef } from "react";
import {
  View,
  TouchableOpacity,
  Animated,
  Easing,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { CloseIcon } from "./core";

interface ActionSheetProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  actions?: React.FC;
}

const ActionSheet: React.FC<ActionSheetProps> = ({
  open,
  onClose,
  children,
  actions: Actions,
}) => {
  const translateY = useRef(new Animated.Value(0)).current;

  const openSheet = () => {
    Animated.timing(translateY, {
      toValue: 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start();
  };

  const closeSheet = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: false,
    }).start(() => {
      onClose();
    });
  };

  useEffect(() => {
    if (open) {
      openSheet();
    } else {
      closeSheet();
    }
  }, [open]);

  const translateYInterpolate = translateY.interpolate({
    inputRange: [0, 1],
    outputRange: [getBottomSpace(), 0],
  });

  const sheetStyle = {
    transform: [{ translateY: translateYInterpolate }],
  };

  return (
    open && (
      <React.Fragment>
        <Animated.View style={[styles.sheetContainer, sheetStyle]}>
          <View
            style={{
              right: 0,
              alignSelf: "flex-end",
              margin: 10,
            }}
          >
            {Actions && <Actions />}
          </View>
          <LinearGradient colors={["#fff", "#eee"]} style={styles.sheet}>
            {children}
            <View
              style={{
                position: "absolute",
                ...styles.closeIcon,
              }}
            >
              <TouchableOpacity onPress={onClose}>
                <CloseIcon size="md" color="black" />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </Animated.View>
      </React.Fragment>
    )
  );
};

const styles = {
  closeIcon: {
    top: 10,
    right: 10,
  },
  sheetContainer: {
    justifyContent: "flex-end",
    height: Dimensions.get("screen").height / 2.8,

    position: "absolute",
    bottom: 0,
    width: "100%",
    // backgroundColor: "rgba(0, 0, 0, 0.3)",
    border: "1px solid red",
  },
  sheet: {
    padding: 16,
    height: "100%",
  },
};

export default ActionSheet;
