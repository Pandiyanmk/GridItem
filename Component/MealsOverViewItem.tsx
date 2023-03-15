import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, View, StyleSheet, Image, Pressable, Platform } from 'react-native';

const MealsOverViewItem = ({ title, imagePath, durations, Complexcity, Affordability, onPressed }) => {

   
    return (
        <View style={styles.outerViewContainer}>
            <Pressable
                onPress={onPressed}
                style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
                android_ripple={{ color: '#ccc' }}>
                <View>
                    <Image style={styles.imageStyle} source={{ uri: imagePath }} />
                    <Text style={styles.textStyling}>{title}</Text>
                </View>
                <View style={styles.viewForDetail}>
                    <Text style={styles.textStyling}>{durations}</Text>
                    <Text style={styles.textStyling}>{Complexcity.toUpperCase()}</Text>
                    <Text style={styles.textStyling}>{Affordability.toUpperCase()}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    outerViewContainer: {
        margin: 16,
        backgroundColor: 'white',
        borderRadius: 4,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    imageStyle: {
        width: '100%',
        height: 200
    },
    textStyling: {
        fontStyle: 'italic',
        fontSize: 20,
        color: 'black',
        textAlign: 'center',
        margin: 8
    },
    buttonPressed: {
        opacity: 0.75
    },
    viewForDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})


export default MealsOverViewItem;