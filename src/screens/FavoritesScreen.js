import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { SearchBar, Button } from 'react-native-elements'

export function FavoritesScreen() {
    const [search, setSearch] = useState('');

    const updateSearch = (search) => {
        setSearch(search);
    };

    return (
        <View>
            <SearchBar
                placeholder="Escribe aquí..."
                onChangeText={updateSearch}
                value={search}
                containerStyle={{ backgroundColor: 'transparent', borderBottomColor: 'transparent', borderTopColor: 'transparent' }}
                inputContainerStyle={{ backgroundColor: '#EDEDED', borderRadius: 15 }}
                inputStyle={{ color: '#434343' }}
                placeholderTextColor={'#434343'}
                searchIcon={{ color: '#434343' }}
                clearIcon={{ color: '#434343' }}
            />
            <Text style={{ color: 'green', fontSize: 20, fontWeight: 'bold', marginTop: 10, marginLeft: 20 }}>Detectar</Text>
            <View style={{ alignItems: 'center', marginTop: 10, marginLeft: 20, marginRight: 20, borderWidth: 1, borderColor: '#000', borderRadius: 15 }}>
                <Image
                    style={{ width: 200, height: 200 }}
                    source={require("../../assets/img/canias.png")}
                />
                <Button title="Diagnosticar" />
            </View>
        </View>
    )
}