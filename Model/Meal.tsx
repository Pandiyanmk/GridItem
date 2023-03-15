class Meal {
    constructor(id, categoryIds, title, category, type, image, price, makingArray, steps) {
        this.id = id
        this.categoryIds = categoryIds;
        this.title = title;
        this.category = category;
        this.type = type;
        this.image = image;
        this.price = price;
        this.makingArray = makingArray;
        this.steps = steps;
    }
}
export default Meal;