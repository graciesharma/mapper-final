import React, { useState } from "react";
import { Text, TouchableOpacity } from "react-native";
import { View, ScrollView, Image, StyleSheet, Dimensions } from "react-native";
import { Icon } from "../core";
import ImageUpload from "../ImagePicker";

interface ImageCarouselProps {
  images: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const [showPhotoUpload, setshowPhotoUpload] = useState(false);

  return (
    <React.Fragment>
     <View
  style={{
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 40,
    alignItems: "center",
  }}
>
  <Text style={styles.header}>Photos</Text>
  <ImageUpload />
</View>


      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.imageContainer}
      >
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.thumbnail} />
        ))}
      </ScrollView>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  imageContainer: {

    flex: 1,
  },
  thumbnail: {
    width: Dimensions.get("screen").width / 3,
    height: "100%",
    marginRight: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 12,
  },
});

export default ImageCarousel;
