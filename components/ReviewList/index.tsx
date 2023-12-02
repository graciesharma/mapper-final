import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { AirbnbRating } from "react-native-ratings"; // Import AirbnbRating from react-native-ratings
import { AddIcon, Button, EditIcon, Icon } from "../core";
import Review from "../ReviewModal";
import ToiletService from "../../services/ToiletService";

interface IProps {
  toiletId: number;
  onSubmit: any;
}

const ReviewList: React.FC = (props: IProps) => {
  const [showReviewModal, setshowReviewModal] = useState(false);
  const [reviewsData, setReviewsData] = useState([]);

  const onload = () => {
    ToiletService.getReview(props.toiletId).then((data) =>
      setReviewsData(data.data)
    );
  };

  React.useEffect(() => {
    onload();
  }, []);

  const handleSubmit = (data: any) => {
    ToiletService.addReview(props.toiletId, data)
      .then((value) => {
        setshowReviewModal(false);
        onload();
      })
      .catch(() => {
        console.log("error occured");
        setshowReviewModal(false);
      });
  };

  const ViewReviewModal = React.useCallback(() => {
    return (
      <TouchableOpacity
        style={{ ...styles.openModalButton, marginLeft: "auto" }}
        onPress={() => setshowReviewModal(true)}
      >
        <Icon as={EditIcon} size="md" color="white" />
      </TouchableOpacity>
    );
  }, []);
  return (
    <View style={styles.container}>
      <View
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          marginTop: 30,
          alignItems: "center",
        }}
      >
        <Text style={styles.reviewHeader}>Reviews</Text>
        <ViewReviewModal />

        <Review
          visible={showReviewModal}
          onClose={() => setshowReviewModal(false)}
          onSubmit={handleSubmit}
        />
      </View>

      <FlatList
        data={reviewsData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.reviewContainer}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ fontWeight: "500", fontSize: 12 }}>
                {item.fullName}
              </Text>
              <AirbnbRating
                count={5}
                defaultRating={item.rating}
                showRating={false}
                selectedColor="#FAC712"
                size={10}
              />
            </View>
            <Text style={{ fontWeight: "400", fontSize: 10 }}>
              {item.email}
            </Text>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 12,
                marginTop: 10,
                marginBottom: 10,
              }}
            >
              {item.description}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  reviewHeader: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 16,
  },
  reviewContainer: {
    width: "auto",
    marginBottom: 16,
    borderStyle: "solid",
    borderColor: "lightgray",
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
  },
  openModalButton: {
    backgroundColor: "#262758",
    height: 35,
    width: 35,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
});

export default ReviewList;
