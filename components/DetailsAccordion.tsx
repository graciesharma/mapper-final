import {
  ButtonText
} from "@gluestack-ui/themed";
import React from "react";
import { ViewDetailsModal } from "./Menu";
import {
  Button
} from "./core";

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
