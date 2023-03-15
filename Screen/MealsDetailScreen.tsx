import { useLayoutEffect } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, Pressable } from 'react-native';
import { MEALS } from "../Data/dummyData";

const MealsDetailScreen = ({ route, navigation }) => {

    const mealsId = route.params.mealsId;
    const displayMeals = MEALS.find((mealItem) => {
        return mealItem.id === mealsId;
    })


    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'About the Meal',
            headerRight: () => {
                return (<Pressable style={({pressed}) => pressed ? styles.favIconTapped : null}>
                    <Image style={{ width: 20, height: 20 }}
                     source={require('../asset/image/fav.png')}/>
                </Pressable>)
            }
        });
    }, [navigation])

    return (<ScrollView>
        <View>
            <Image style={styles.imageStyling} source={{ uri: displayMeals.image }}></Image>
        </View>
        <View style={styles.textViewStyling}>
            <View style={styles.innerviewStyling}>
                <Text style={styles.textStyle}>{displayMeals.title}</Text>
                <View style={styles.viewForDetail}>
                    <Text style={styles.textStyling}>{displayMeals.price}</Text>
                    <Text style={styles.textStyling}>{displayMeals.type.toUpperCase()}</Text>
                    <Text style={styles.textStyling}>{displayMeals.category.toUpperCase()}</Text>
                </View>
                <Text style={styles.subTextStyle}>Ingredients</Text>
                {displayMeals.makingArray.map(item =>
                    <View style={styles.viewIngredients} key={item}>
                        <Text style={styles.ingreditensText}>{item}</Text>
                    </View>
                )}
                <Text style={styles.subTextStyle}>Steps</Text>
                {displayMeals.steps.map(item =>
                    <View style={styles.viewIngredients} key={item}>
                        <Text style={styles.ingreditensText}>{item}</Text>
                    </View>
                )}
            </View>
        </View>

    </ScrollView>)
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontStyle: 'italic',
        color: 'black',
        fontWeight: 'bold'
    },
    subTextStyle: {
        fontSize: 20,
        fontStyle: 'italic',
        color: 'brown',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    imageStyling: {
        height: 350,
        width: '100%'
    },
    favIconTapped: {
        opacity: 0.75
    },
    textViewStyling: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    innerviewStyling: {
        padding: 20,
        alignItems: 'center',
        width: '100%'
    },
    textStyling: {
        fontStyle: 'italic',
        fontSize: 16,
        color: 'grey',
        textAlign: 'center',
        margin: 8
    },
    ingreditensText: {
        fontStyle: 'italic',
        fontSize: 16,
        color: 'grey',
        textAlign: 'center',
        margin: 5
    },
    viewIngredients: {
        backgroundColor: 'pink',
        margin: 2,
        borderRadius: 4,
        width: '80%'
    },
    viewForDetail: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
export default MealsDetailScreen;