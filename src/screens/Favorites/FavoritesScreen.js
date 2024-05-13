import { View, Text, Image, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SearchBar, Button, Icon } from 'react-native-elements'
import { styles } from './FavoritesScreen.style'

export function FavoritesScreen() {
    const [search, setSearch] = useState('');

    const updateSearch = (search) => {
        setSearch(search);
    };

    const data = [
        {
            nombre: 'Caña Violeta',
            ubicacion: 'Xico, Tamaulipas',
            variedad: 'MEX 69-290',
            fecha: '18 de Julio 2021',
            image: require("../../../assets/img/cultivo-de-cana-de-azucar-scaled.jpeg")
        },
        {
            nombre: 'Veteada',
            ubicacion: 'Abra, Tamaulipas',
            variedad: 'MEX 59-984',
            fecha: '15 de Febrero 2022',
            image: require("../../../assets/img/Plagas.jpg")
        },
        {
            nombre: 'Garnica',
            ubicacion: 'El Mante, Tamaulipas',
            variedad: 'MEX 78-294',
            fecha: '07 de Marzo de 2023',
            image: require("../../../assets/img/cultivo-de-cana-de-azucar-scaled.jpeg")
        },
        {
            nombre: 'Morita',
            ubicacion: 'Gómez Farías, Tamaulipas',
            variedad: 'MEX 80-150',
            fecha: '24 de Septiembre de 2022',
            image: require("../../../assets/img/Plagas.jpg")
        },
        // ... puedes agregar más objetos aquí ...
    ];

    return (
        <ScrollView>
            <SearchBar
                placeholder="Busca tu cultivo aqui..."
                onChangeText={updateSearch}
                value={search}
                containerStyle={styles.searchBar}
                inputContainerStyle={{ backgroundColor: '#EDEDED', borderRadius: 15 }}
                inputStyle={{ color: '#434343' }}
                placeholderTextColor={'#434343'}
                searchIcon={{ color: '#434343' }}
                clearIcon={{ color: '#434343' }}
            />
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
                />
            </View>
            <Text style={styles.text}>Explorar</Text>
            <View style={styles.contentExplorar}>
                <View style={styles.contentOpciones}>
                    <Image
                        style={{ flex: 1, height: 150, borderRadius: 15 }}
                        source={require("../../../assets/img/cultivo-de-cana-de-azucar-scaled.jpeg")}
                    />
                    <View style={styles.overlay}>
                        <Text style={styles.overlayText}>Tipos de cañas</Text>
                    </View>
                </View>
                <View style={styles.contentOpciones}>
                    <Image
                        style={{ flex: 1, height: 150, borderRadius: 15 }}
                        source={require("../../../assets/img/Plagas.jpg")}
                    />
                    <View style={styles.overlay}>
                        <Text style={styles.overlayText}>Plagas</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.text}>Lista de cultivos</Text>
            {data.map((item, index) => (
                <View key={index} style={styles.contentCultivos}>
                    <Image
                        style={styles.imageCultivos}
                        source={item.image}
                    />
                    <View style={{ flex: 2, alignSelf: 'flex-start', marginTop: 15 }}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#18bfb5' }}>{item.nombre}</Text>
                        <Text>Ubicacion: {item.ubicacion}</Text>
                        <Text>Variedad <Text style={{ fontWeight: 'bold' }}>{item.variedad}</Text></Text>
                        <Text>{item.fecha}</Text>
                    </View>

                </View>
            ))}
        </ScrollView>
    )
}