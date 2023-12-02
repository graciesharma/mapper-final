import React, { useState } from "react";
import {
  Text,
  Box,
  Divider,
  Modal,
  Heading,
  Badge,
  Button,
  CloseIcon,
} from "../core";
import { styles } from "../../styles";
import { LatLng } from "react-native-maps";
import { TouchableOpacity, View } from "react-native";
import { ILLMap } from "../../illustration";
import { Toilet } from "../../interfaces/Toilet";
import { ButtonIcon, ButtonText } from "@gluestack-ui/themed";
import { MapPin } from "lucide-react-native";
import ImageCarousel from "../ImageCarousel";
import ReviewList from "../ReviewList";

const getRandomText = () => {
  const texts = [
    "Lorem ipsum",
    "Consectetur ",
    "Sed do ",
    "Incididunt ",
    "Magna a",
    "Ut enim iam",
    "Quis nostitation",
    "Ullamisi",
    "Aliquip ex eaat",
    "Duis aute irure dolor",
  ];
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
};

const randomText = getRandomText();

const images = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
];

export const PrimaryDetails = (details: Partial<Toilet>) => {
  return (
    <React.Fragment>
      <Box style={{ marginBottom: 10 }}>
        <Heading>{details.name}</Heading>
        <Text style={{ fontWeight: "600" }}>{details.address}</Text>
        <Text>{details.description}</Text>
      </Box>
      {details?.tags ? <Divider /> : null}
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          marginBottom: 10,
        }}
      >
        {details?.tags?.split(",")?.map?.((data, index) => (
          <Badge
            mr={10}
            key={index}
            mt={10}
            w="auto"
            h={22}
            size="lg"
            variant="solid"
            borderRadius="$2xl"
            action="success"
          >
            <Badge.Text>{data}</Badge.Text>
          </Badge>
        ))}
      </Box>
      {details?.tags ? <Divider /> : null}
      <View style={{ marginTop: 10, flexDirection: "row" }}>
        <Text sx={{ fontWeight: "600", color: "$black" }}>
          Opening Hours :{" "}
        </Text>
        <Text>
          {details?.openingTime} am - {details.closingTime} pm
        </Text>
      </View>
    </React.Fragment>
  );
};

export const ViewDetailsModal = (props: {
  showDetailsModal: boolean;
  closeModalDetails: VoidFunction;
  details: Toilet;
  onGetDirectionsPress?: VoidFunction;
}) => {
  const { showDetailsModal, closeModalDetails, details } = props;

  return (
    <React.Fragment>
      {showDetailsModal && (
        <Modal
          isOpen={showDetailsModal}
          onClose={closeModalDetails}
          closeOnOverlayClick={true}
        >
          <View style={styles.fullPageModalContent}>
            <View style={styles.detailsModalContent}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: 17,
                  paddingBottom: 12,
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "600",
                    color: "black",
                    padding: 2,
                  }}
                >
                  Toilet Details
                </Text>

                <TouchableOpacity
                  onPress={closeModalDetails}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ marginRight: 10 }}></Text>
                  <CloseIcon size="xl" color="black" />
                </TouchableOpacity>
              </View>

              <Divider style={{ marginBottom: 20 }} />
              <PrimaryDetails {...details} />
              <View
                style={{
                  flex: 1,
                }}
              >
                <ImageCarousel images={[details.images]} />
                <ReviewList toiletId={details.id} />
              </View>

              <Button
                size="md"
                variant="solid"
                action="primary"
                isDisabled={false}
                isFocusVisible={false}
                onPress={props?.onGetDirectionsPress}
                style={{
                  marginTop: "auto",
                  borderRadius: 16,
                  backgroundColor: "#262758",
                }}
              >
                <ButtonIcon as={MapPin} />
                <ButtonText>Get Directions </ButtonText>
              </Button>
            </View>
          </View>
        </Modal>
      )}
    </React.Fragment>
  );
};

const MenuDetail = () => {
  const [selectedMarkerDetails, setSelectedMarkerDetails] = useState<LatLng>(
    {} as LatLng
  );
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  const closeModalDetails = () => {
    setShowDetailsModal(false);
  };

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
          marginRight: 2,
        }}
      >
        <Text style={{ flex: 1, marginLeft: 10 }}>{randomText}</Text>
        <Box
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <ILLMap />
          <TouchableOpacity
            style={styles.buttonContainer2}
            onPress={() => {
              setSelectedMarkerDetails({
                latitude: 0,
                longitude: 0,
              });
              setShowDetailsModal(true);
            }}
          >
            <Text style={styles.buttonText2}>View Details</Text>
          </TouchableOpacity>
        </Box>
      </Box>
      <Divider style={styles.divider} />

      {/* <ViewDetailsModal
        closeModalDetails={closeModalDetails}
        showDetailsModal={showDetailsModal}
        details={details}
      /> */}
    </>
  );
};

export default MenuDetail;
