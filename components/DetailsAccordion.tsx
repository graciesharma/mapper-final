import React from "react";
import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicatorWrapper,
  ActionsheetDragIndicator,
  VStack,
  HStack,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  InputSlot,
  Input,
  InputIcon,
  InputField,
  ButtonText,
  ActionsheetItem,
  ActionsheetIcon,
  ActionsheetItemText,
  Modal,
  ModalBackdrop,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@gluestack-ui/themed";
import {
  Box,
  Button,
  CloseIcon,
  FavouriteIcon,
  Heading,
  Icon,
  PlayIcon,
  ShareIcon,
  Text,
  TrashIcon,
} from "./core";
import { Image, KeyboardAvoidingView } from "react-native";
import { ViewDetailsModal } from "./Menu";

function DetailsAccordion() {
  const [showModal, setShowModal] = React.useState(false);
  const handleClose = () => setShowModal(!showModal);
  const ref = React.useRef(null);
  return (
    <>
      <Button onPress={handleClose}>
        <ButtonText>Open</ButtonText>
      </Button>
      <ViewDetailsModal
        closeModalDetails={() => setShowModal(false)}
        showDetailsModal={showModal}
      />
    </>
  );
}

export default DetailsAccordion;
