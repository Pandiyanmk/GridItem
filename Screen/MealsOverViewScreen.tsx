import React from "react";
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useLayoutEffect } from 'react';
import { MEALS, CATEGORIES } from "../Data/dummyData";
import MealsOverViewItem from "../Component/MealsOverViewItem";

const MealsOverViewScreen = ({ route, navigation }) => {
    const catId = route.params.categoryId;
    const displayMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    })

    useLayoutEffect(() => {
        const catTitle = CATEGORIES.find((category) => category.id === catId).title;
        navigation.setOptions({
            title: catTitle
        });
    }, [catId, navigation])


    const redirectToDetailScreen = (id) => navigation.navigate('MealsDetail', {
        mealsId: id
    })

    function renderMeal(itemData) {
        function movetoDetailScreen() {
            redirectToDetailScreen(itemData.item.id)
        }

        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imagePath: itemData.item.image,
            durations: itemData.item.price,
            Complexcity: itemData.item.type,
            Affordability: itemData.item.category
        }
        return (
            <MealsOverViewItem {...mealItemProps} onPressed={movetoDetailScreen} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={displayMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMeal} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    },
    textStyling: {
        fontSize: 20,
        fontStyle: 'italic',
        color: 'black'
    }
});

export default MealsOverViewScreen;