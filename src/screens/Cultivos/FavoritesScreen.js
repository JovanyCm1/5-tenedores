import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { SearchBar, Button, Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../utils";
import { LinearGradient } from "expo-linear-gradient";
import * as Location from 'expo-location';
import axios from 'axios';
import { styles } from "./FavoritesScreen.style";

export function FavoritesScreen() {
	const [search, setSearch] = useState("");

	const updateSearch = (search) => {
		setSearch(search);
	};

	const navigation = useNavigation();
	const goToDiagnosticar = () => {
		console.log("📢Ir a diagnosticar");
		navigation.navigate(screen.favorites.diagnosticar);
	};
	const goToVariedades = () => {
		console.log("📢Ir a variedades")
		navigation.navigate(screen.favorites.variedades);
	};
	const goToPlagas = () => {
		console.log("📢Ir a plagas")
	};

	const data = [
		{
			nombre: "Caña Violeta",
			ubicacion: "Xico, Tamaulipas",
			variedad: "MEX 69-290",
			fecha: "18 de Julio 2021",
			image: require("../../../assets/img/cultivo-de-cana-de-azucar-scaled.jpeg"),
		},
		{
			nombre: "Veteada",
			ubicacion: "Abra, Tamaulipas",
			variedad: "MEX 59-984",
			fecha: "15 de Febrero 2022",
			image: require("../../../assets/img/Plagas.jpg"),
		},
		{
			nombre: "Garnica",
			ubicacion: "El Mante, Tamaulipas",
			variedad: "MEX 78-294",
			fecha: "07 de Marzo de 2023",
			image: require("../../../assets/img/cultivo-de-cana-de-azucar-scaled.jpeg"),
		},
		{
			nombre: "Morita",
			ubicacion: "Gómez Farías, Tamaulipas",
			variedad: "MEX 80-150",
			fecha: "24 de Septiembre de 2022",
			image: require("../../../assets/img/cultivo-de-cana-de-azucar-scaled.jpeg"),
		},
	];

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
		<ScrollView style={{ marginBottom: 50 }}>
			<LinearGradient
				colors={["#3DE4AD", "transparent"]}
				style={{
					position: "absolute",
					left: 0,
					right: 0,
					top: 0,
					height: "10%",
				}}
			/>
			<View style={{ padding: 20, alignItems: "center" }}>
				<Text style={{ fontSize: 18 }}>Bienvenido</Text>
				<Text style={{ fontSize: 25, fontWeight: "400", marginTop: 5 }}>
					Ing. Rivera
				</Text>
				<View
					style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
				>
					<Icon
						type="material-community"
						name="map-marker"
						size={23}
						color="#000"
						iconStyle={{ opacity: 0.5 }} // Ajustar opacidad del icono
					/>

					{weatherData ? (
						<Text style={{ fontSize: 25, marginLeft: 5, opacity: 0.5 }}>
							{weatherData.name}
						</Text>
					) : (
						<Text style={{ fontSize: 25, marginLeft: 5, opacity: 0.5 }}>
							Cargando...
						</Text>
					)}
				</View>
			</View>
			<View style={{ position: "relative" }}>
				<SearchBar
					placeholder="Busca tu cultivo aqui..."
					onChangeText={updateSearch}
					value={search}
					containerStyle={[styles.searchBar, { marginTop: 20 }]} // Añadir margen superior
					inputContainerStyle={{
						backgroundColor: "#EDEDED",
						borderRadius: 15,
						borderWidth: 1, // Añadir borde
						borderColor: "rgba(112, 112, 112, 0.5)", // Color del borde con transparencia
					}}
					inputStyle={{ color: "#434343", opacity: 0.7 }} // Ajustar opacidad del texto
					placeholderTextColor={"#434343"}
					searchIcon={{ color: "#434343" }}
					clearIcon={{ color: "#434343" }}
				/>
				{search === "" && (
					<Image
						source={require("../../../assets/img/logo-para-buscador.png")} // Reemplaza con la ruta de tu imagen
						style={{
							position: "absolute",
							right: 10,
							top: "50%",
							transform: [{ translateY: 0 }],
							transform: [{ translateX: -12 }], // Ajustar posición vertical
							width: 24,
							height: 24,
							opacity: 0.5, // Ajustar opacidad
						}}
					/>
				)}
			</View>

			<Text style={styles.text}>Detectar</Text>
			<View style={styles.contentDiagnostico}>
				<Image
					style={styles.imageDetectar}
					source={require("../../../assets/img/Scanner.png")}
				/>
				<Button
					icon={
						<Icon
							type="material-community"
							name="barcode-scan"
							size={20}
							color="white"
						/>
					}
					title=" Diagnosticar"
					buttonStyle={styles.button}
					onPress={goToDiagnosticar}
				/>
			</View>
			<Text style={styles.text}>Explorar</Text>
			<View style={styles.contentExplorar}>
				<TouchableOpacity style={styles.contentOpciones} onPress={goToVariedades}>
					<Image
						style={{ flex: 1, height: 150, borderRadius: 15 }}
						source={require("../../../assets/img/cultivo-de-cana-de-azucar-scaled.jpeg")}
					/>
					<View style={styles.overlay}>
						<Text style={styles.overlayText}>
							<Text style={{ color: "#FFFFFF" }}>Tipos de </Text>
							<Text style={{ color: "#FFFF00" }}>cañas</Text>
						</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity style={styles.contentOpciones} onPress={goToPlagas}>
					<Image
						style={{ flex: 1, height: 150, borderRadius: 15 }}
						source={require("../../../assets/img/Plagas.jpg")}
					/>
					<View style={styles.overlay}>
						<Text style={styles.overlayText}>Plagas</Text>
					</View>
				</TouchableOpacity>
			</View>
			<Text style={styles.text}>Lista de cultivos</Text>
			{data.map((item, index) => (
				<TouchableOpacity key={index} style={styles.contentCultivos} onPress={() => console.log("📢Ir a " + index)}>
					<Image style={styles.imageCultivos} source={item.image} />
					<View style={{ flex: 2, alignSelf: "flex-start", marginTop: 15 }}>
						<Text
							style={{ fontSize: 18, fontWeight: "bold", color: "#18bfb5" }}
						>
							{item.nombre}
						</Text>
						<Text>Ubicacion: {item.ubicacion}</Text>
						<Text>
							Variedad{" "}
							<Text style={{ fontWeight: "bold" }}>{item.variedad}</Text>
						</Text>
						<Text>{item.fecha}</Text>
					</View>
				</TouchableOpacity>
			))}
		</ScrollView>
	);
}
