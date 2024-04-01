import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Modal.styles";
import { Overlay } from "react-native-elements";

export function Modal(props) {
  const { show, close, children } = props;
  return (
    <Overlay
      isVisible={show}
      overlayStyle={styles.overlay}
      onBackdropPress={close}
    >
      {children}
    </Overlay>
  );
}
