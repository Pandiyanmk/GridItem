import React from 'react';
import { StyleSheet, Dimensions, View, ImageBackground, FlatList, Text } from 'react-native';
import GridItem from '../Component/GridItem';
import { CATEGORIES } from '../Data/dummyData';

const MenuScreen = () => {
    return (
        <View style={styles.viewConatiner}>
            <ImageBackground
                resizeMode='cover'
                style={styles.backgroundImage}
                source={require('../asset/image/backimagelogin.jpg')} />

            <FlatList
                data={CATEGORIES}
                numColumns={2}
                keyExtractor={(item) => item.id}
                renderItem={({ index, item }) => (
                    <GridItem title={item.title} color={item.color} />
                )} />

        </View>
    )
}


const styles = StyleSheet.create({
    viewConatiner: {
      flex: 1
    },
    backgroundImage: {
      position: 'absolute',
      left: 0,
      top: 0,
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
      opacity: 0.4
    }
  });
export default MenuScreen;