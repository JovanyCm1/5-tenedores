import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  ScrollView,
  Animated,
  StyleSheet,
  Image,
} from "react-native";
import * as Location from "expo-location";
import axios from "axios";
import { styles } from "./DispositivosScreen.style";

const DeviceCard = ({ image, title, location, variety, date }) => (
  <View style={styles.deviceCard}>
    <Image source={image} style={styles.deviceImage} />
    <View style={styles.deviceInfo}>
      <Text style={styles.deviceTitle}>{title}</Text>
      <View style={styles.deviceLocationContainer}>
        <Image
          source={require("../../../assets/img/ubicacion.png")}
          style={styles.locationIcon}
        />
        <Text style={styles.deviceLocation}>Ubicación: {location}</Text>
      </View>
      <Text style={styles.deviceVariety}>Variedad de la caña: {variety}</Text>
      <Text style={styles.deviceDate}>Última medición: {date}</Text>
    </View>
  </View>
);

export function DispositivosScreen() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Permission to access location was denied");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      const response = await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=de70cd52f01093abc88283a19af4fc3f&units=metric`
      );
      setWeatherData(response.data);
    })();
  }, []);

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [200, 0],
    extrapolate: "clamp",
  });

  const headerOpacity = scrollY.interpolate({
    inputRange: [0, 200],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const devices = [
    {
      image: require("../../../assets/img/ejemplo-dispositivo.png"),
      title: "Dispositivo 1",
      location: "El Mante, Tamps.",
      variety: "IMMEX 98-13",
      date: "16 de febrero del 2024",
    },
    {
      image: require("../../../assets/img/dispositivo2.png"),
      title: "Dispositivo 2",
      location: "Ciudad Victoria, Tamps.",
      variety: "CP 72-2086",
      date: "15 de febrero del 2024",
    },
    {
      image: require("../../../assets/img/dispositivo3.png"),
      title: "Dispositivo 3",
      location: "Tampico, Tamps.",
      variety: "RB 72-454",
      date: "14 de febrero del 2024",
    },
    {
      image: require("../../../assets/img/ejemplo-dispositivo.png"),
      title: "Dispositivo 4",
      location: "Altamira, Tamps.",
      variety: "LCP 85-384",
      date: "13 de febrero del 2024",
    },
    {
      image: require("../../../assets/img/dispositivo2.png"),
      title: "Dispositivo 5",
      location: "Nuevo Laredo, Tamps.",
      variety: "SP 79-2233",
      date: "12 de febrero del 2024",
    },

    // Agrega más dispositivos según sea necesario
  ];

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={[
          styles.header,
          { height: headerHeight, opacity: headerOpacity },
        ]}
      >
        {weatherData && (
          <View style={styles.weatherCard}>
            <Image
              source={require("../../../assets/img/ejemplo-caña.png")}
              style={styles.image}
            />
            <View style={styles.weatherTextContainer}>
              <Text style={styles.title}>Caña de campo</Text>
              <Text style={styles.subtitle}>Cd. Mante</Text>
              <View style={styles.weatherInfo}>
                <View style={styles.weatherItem}>
                  <Text style={styles.weatherLabel}>Temperatura</Text>
                  <View style={styles.weatherValueContainer}>
                    <Image
                      source={require("../../../assets/img/temperatura.png")}
                      style={styles.weatherIcon}
                    />
                    <Text style={styles.weatherText}>
                      {weatherData.main.temp}°C
                    </Text>
                  </View>
                </View>
                <View style={styles.weatherItem}>
                  <Text style={styles.weatherLabel}>Luz</Text>
                  <View style={styles.weatherValueContainer}>
                    <Image
                      source={require("../../../assets/img/luz.png")}
                      style={styles.weatherIcon}
                    />
                    <Text style={styles.weatherText}>60% Luz</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      </Animated.View>
      <ScrollView
        contentContainerStyle={{ paddingTop: 250 }}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.devicesContainer}>
          <Text style={styles.devicesTitle}>Dispositivos</Text>
          {devices.map((device, index) => (
            <DeviceCard
              key={index}
              image={device.image}
              title={device.title}
              location={device.location}
              variety={device.variety}
              date={device.date}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
