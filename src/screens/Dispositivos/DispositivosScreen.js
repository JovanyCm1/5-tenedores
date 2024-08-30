import React, { useEffect, useState, useRef } from 'react';
import { View, Text, ScrollView, Animated, StyleSheet } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

export function DispositivosScreen() {
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
    const scrollY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.error('Permission to access location was denied');
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation({ latitude: location.coords.latitude, longitude: location.coords.longitude });
            const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=de70cd52f01093abc88283a19af4fc3f&units=metric`);
            setWeatherData(response.data);
        })();
    }, []);

    const headerHeight = scrollY.interpolate({
        inputRange: [0, 200],
        outputRange: [200, 0],
        extrapolate: 'clamp',
    });

    const headerOpacity = scrollY.interpolate({
        inputRange: [0, 200],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    return (
        <View style={{ flex: 1 }}>
            <Animated.View style={[styles.header, { height: headerHeight, opacity: headerOpacity }]}>
                <Text style={styles.headerText}>Información del Clima</Text>
                {weatherData && (
                    <View>
                        <Text>Ciudad: {weatherData.name}</Text>
                        <Text>Location: {location.latitude}, {location.longitude}</Text>
                        <Text>Temperatura: {weatherData.main.temp}°C</Text>
                        <Text>Humedad: {weatherData.main.humidity}%</Text>
                        <Text>Presión: {weatherData.main.pressure} hPa</Text>
                        <Text>Velocidad del viento: {weatherData.wind.speed} m/s</Text>
                        <Text>Descripción: {weatherData.weather[0].description}</Text>
                    </View>
                )}
            </Animated.View>
            <ScrollView
                contentContainerStyle={{ paddingTop: 200 }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: false }
                )}
                scrollEventThrottle={16}
            >
                <View style={styles.content}>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    <Text>Contenido desplazable aquí...</Text>
                    {/* Agrega más contenido aquí */}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: 'white',
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    content: {
        padding: 20,
    },
});