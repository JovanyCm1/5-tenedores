import React from "react";
import { View, ActivityIndicator } from "react-native";
import { styles } from "./LoadingModal.styles";

import { Overlay, Text } from "react-native-elements";

export function LoadingModal(props) {
  const { show, text } = props;

  return (
    <Overlay
      isVisible={show}
      windowBackgroudColor="rgba(0,0,0,0.5)"
      overlayBackgroudColor="transparent"
      overlayStyle={styles.overlay}
    >
      <View style={styles.view}>
        <ActivityIndicator size="large" color="#FF0000"></ActivityIndicator>
        {text && <Text style={styles.text}>{text}</Text>}
      </View>
    </Overlay>
  );
}
LoadingModal.defaultProps = {
  show: true,
};
