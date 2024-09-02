import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SearchBar } from 'react-native-elements'

import { LinearGradient } from "expo-linear-gradient";
import { styles } from './VariedadesScreen.style'
import { data } from './Datos'

export function VariedadesScreen() {
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };

    return (
        <ScrollView style={{ marginBottom: 50 }}>
            <LinearGradient
                colors={["#3DE4AD", "transparent"]}
                style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    top: 0,
                    height: 500
                }}
            />
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
                        source={require("../../../../assets/img/logo-para-buscador.png")} // Reemplaza con la ruta de tu imagen
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

            {data.map((item, index) => (
                <TouchableOpacity key={index} style={styles.contentCultivos} onPress={() => console.log("📢Ir a " + index)}>
                    <Image style={styles.imageCultivos} source={item.image} />
                    <View style={{ flex: 2, alignSelf: "flex-start", marginTop: 15 }}>
                        <Text
                            style={{ fontSize: 18, fontWeight: "bold", color: "#18bfb5" }}
                        >
                            {item.nombre}
                        </Text>
                        <Text style={{ fontSize: 12, color: "gray" }}>
                            {item.nombreCientifico}
                        </Text>
                        <Text style={{ fontWeight: "bold", marginRight: 20 }}>
                            {item.descripcionCorta.length > 100 ? item.descripcionCorta.substring(0, 100) + '...' : item.descripcionCorta}
                        </Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}