import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location';
import axios from 'axios';

export function DispositivosScreen() {
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
    console.log(location.latitude, location.longitude);

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

    return (
        <View>
            {weatherData ? (
                <View>
                    <Text>Location: {location.latitude}, {location.longitude}</Text>
                    <Text>Temperatura: {weatherData.main.temp}°C</Text>
                    <Text>Humedad: {weatherData.main.humidity}%</Text>
                    <Text>Presión: {weatherData.main.pressure} hPa</Text>
                    <Text>Velocidad del viento: {weatherData.wind.speed} m/s</Text>
                </View>
            ) : (
                <Text>Cargando...</Text>
            )}
        </View>
    );
}