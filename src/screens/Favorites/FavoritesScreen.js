import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { SearchBar, Button, Icon } from 'react-native-elements'
import { styles } from './FavoritesScreen.style'

export function FavoritesScreen() {
    const [search, setSearch] = useState('');

    const updateSearch = (search) => {
        setSearch(search);
    };

    return (
        <View>
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
                    source={require("../../../assets/img/canias.png")}
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
                        <Text style={styles.overlayText}>Tipos de Cañas</Text>
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
        </View>
    )
}