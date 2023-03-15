import Category from "../Model/Category";
import Meal from "../Model/Meal";

export const CATEGORIES = [
    new Category('c1', 'Indian', '#f5428d'),
    new Category('c2', 'Chinese', '#f54242'),
    new Category('c3', 'Hamburgers', '#f5a442'),
    new Category('c4', 'German', '#368dff'),
    new Category('c5', 'BreakFast', '#9eecff'),
    new Category('c6', 'French', '#b9ffb0'),
    new Category('c7', 'Asian', '#ffc7ff'),
    new Category('c8', 'Exotic', '#47fced')
];

export const MEALS = [
    new Meal(
        'm1',
        ['c1', 'c2'],
        'Chappathi With Tomatao Sauce',
        'affordable',
        'simple',
        'https://images-prod.healthline.com/hlcmsresource/images/AN_images/tomatoes-1296x728-feature.jpg',
        20,
        [
            '4 Tomatoes',
            '1 Tbsp Of Olive Oil',
            '1 Onion'
        ],
        [
            'Step 1: Add Olive Oil and Onions. Use a wide skillet or a wide-bottomed pot',
            'Step 2: Season',
            'Step 3: Add Garlic',
            'Step 4: Crush Tomatoes',
            'Step 5: Add the Tomatoes and Simmer',
            'Step 6: Add Flavor and Spice',
            'Step 7: Enjoy!',
        ]
    ),
    new Meal(
        'm2',
        ['c1', 'c2'],
        'Egg With Fry Sauce',
        'affordable',
        'simple',
        'https://images.indianexpress.com/2020/01/eggs_759.jpg',
        30,
        [
            '4 Tomatoes',
            '1 Tbsp Of Olive Oil',
            '1 Onion'
        ],
        [
            'Step 1: Add Olive Oil and Onions. Use a wide skillet or a wide-bottomed pot',
            'Step 2: Season',
            'Step 3: Add Garlic',
            'Step 4: Crush Tomatoes',
            'Step 5: Add the Tomatoes and Simmer',
            'Step 6: Add Flavor and Spice',
            'Step 7: Enjoy!',
        ]
    ),
    new Meal(
        'm3',
        ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'],
        'Chicken Fried Rice',
        'affordable',
        'simple',
        'https://www.funfoodfrolic.com/wp-content/uploads/2021/10/Fried-Rice-Blog-Thumbnail.jpg',
        50,
        [
            '4 Tomatoes',
            '1 Tbsp Of Olive Oil',
            '1 Onion'
        ],
        [
            'Step 1: Add Olive Oil and Onions. Use a wide skillet or a wide-bottomed pot',
            'Step 2: Season',
            'Step 3: Add Garlic',
            'Step 4: Crush Tomatoes',
            'Step 5: Add the Tomatoes and Simmer',
            'Step 6: Add Flavor and Spice',
            'Step 7: Enjoy!',
        ]
    ),
    new Meal(
        'm4',
        ['c5', 'c6', 'c7', 'c8'],
        'Mutton Briyani',
        'affordable',
        'Complex',
        'https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg',
        20,
        [
            '4 Tomatoes',
            '1 Tbsp Of Olive Oil',
            '1 Onion'
        ],
        [
            'Step 1: Add Olive Oil and Onions. Use a wide skillet or a wide-bottomed pot',
            'Step 2: Season',
            'Step 3: Add Garlic',
            'Step 4: Crush Tomatoes',
            'Step 5: Add the Tomatoes and Simmer',
            'Step 6: Add Flavor and Spice',
            'Step 7: Enjoy!',
        ]
    ),
    new Meal(
        'm5',
        ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'],
        'Chicken Tandoori',
        'affordable',
        'Complex',
        'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=2000',
        70,
        [
            '4 Tomatoes',
            '1 Tbsp Of Olive Oil',
            '1 Onion'
        ],
        [
            'Step 1: Add Olive Oil and Onions. Use a wide skillet or a wide-bottomed pot',
            'Step 2: Season',
            'Step 3: Add Garlic',
            'Step 4: Crush Tomatoes',
            'Step 5: Add the Tomatoes and Simmer',
            'Step 6: Add Flavor and Spice',
            'Step 7: Enjoy!',
        ]
    ),
    new Meal(
        'm6',
        ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'],
        'Prawn Fry Rice',
        'affordable',
        'Complex',
        'https://images.immediate.co.uk/production/volatile/sites/30/2015/02/Next-level-paella-f11ee26.jpg',
        80,
        [
            '4 Tomatoes',
            '1 Tbsp Of Olive Oil',
            '1 Onion'
        ],
        [
            'Step 1: Add Olive Oil and Onions. Use a wide skillet or a wide-bottomed pot',
            'Step 2: Season',
            'Step 3: Add Garlic',
            'Step 4: Crush Tomatoes',
            'Step 5: Add the Tomatoes and Simmer',
            'Step 6: Add Flavor and Spice',
            'Step 7: Enjoy!',
        ]
    ),
    new Meal(
        'm7',
        ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'],
        'Egg Bowl Rice',
        'affordable',
        'Medium',
        'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
        10,
        [
            '4 Tomatoes',
            '1 Tbsp Of Olive Oil',
            '1 Onion'
        ],
        [
            'Step 1: Add Olive Oil and Onions. Use a wide skillet or a wide-bottomed pot',
            'Step 2: Season',
            'Step 3: Add Garlic',
            'Step 4: Crush Tomatoes',
            'Step 5: Add the Tomatoes and Simmer',
            'Step 6: Add Flavor and Spice',
            'Step 7: Enjoy!',
        ]
    ),
    new Meal(
        'm8',
        ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8'],
        'Chappathi Chana Masala',
        'affordable',
        'Medium',
        'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=768,574',
        90,
        [
            '4 Tomatoes',
            '1 Tbsp Of Olive Oil',
            '1 Onion'
        ],
        [
            'Step 1: Add Olive Oil and Onions. Use a wide skillet or a wide-bottomed pot',
            'Step 2: Season',
            'Step 3: Add Garlic',
            'Step 4: Crush Tomatoes',
            'Step 5: Add the Tomatoes and Simmer',
            'Step 6: Add Flavor and Spice',
            'Step 7: Enjoy!',
        ]
    )
];


