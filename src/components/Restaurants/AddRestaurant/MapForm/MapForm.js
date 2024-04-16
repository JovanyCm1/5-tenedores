import React, { useState, useEffect } from "react";
import { Text } from "react-native";
import * as Location from "expo-location";
import Toast from "react-native-toast-message";
import { Modal } from "../../../Shared";

export function MapForm(props) {
  const { show, close } = props;

  const [location, setLocation] = useState({
    latitude: 0.001,
    longitude: 0.001,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  });

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        Toast.show({
          type: "info",
          position: "bottom",
          text1: "Tienes que dar permisos de localización",
        });
        return;
      }

      const locationTemp = await Location.getCurrentPositionAsync({});

      setLocation({
        latitude: locationTemp.coords.latitude,
        longitude: locationTemp.coords.longitude,
        latitudeDelta: 0.001,
        longitudeDelta: 0.001,
      });
    })();
  }, []);

  return (
    <Modal show={show} close={close}>
      <Text>MapForm</Text>
    </Modal>
  );
}
