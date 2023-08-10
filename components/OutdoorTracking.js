import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { circle } from "../assets/images/images.js";
import MapView from 'react-native-maps';

function OutdoorTracking() {
    return (
        <View style={styles.container}>
            <Image source={circle} />
            <View style={styles.mapView}>
                <MapView style={styles.map} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.7}
                >
                    <Text style={styles.buttonText}>Track</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F5F5F5",
    },
    mapView: {
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        borderRadius: 4,
    },
    map: {
        width: 386,
        height: 520,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: "center",
    },
    button: {
        backgroundColor: "#D12D2D",
        marginTop: 20,
        borderRadius: 40,
        width: 160,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        margin: 5
    },
    buttonText: {
        alignSelf: "center",
        fontSize: 16,
        padding: 15,
        fontWeight: "bold",
        color: "white",
    },
})

export default OutdoorTracking