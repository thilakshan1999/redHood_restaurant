import FeaturedFoodsImg from "../assets/images/featuredFood/Briyani.jpg";
class FoodInfo {
  constructor(image, name, category, price, description) {
    this.image = image;
    this.name = name;
    this.category = category;
    this.price = price;
    this.description = description;
  }
}

const foodList = [
  new FoodInfo(
    FeaturedFoodsImg,
    "Chicken Lamprais",
    "Rice & Curry",
    950.0,
    "A delicious combination of yellow rice, chicken, and vegetables wrapped in banana leaves."
  ),
  new FoodInfo(
    FeaturedFoodsImg,
    "Spaghetti Carbonara",
    "Pasta",
    850.0,
    "Classic Italian pasta dish with creamy sauce, bacon, and Parmesan cheese."
  ),
  new FoodInfo(
    FeaturedFoodsImg,
    "Grilled Chicken",
    "Grill",
    1100.0,
    "Juicy and tender grilled chicken marinated with special spices."
  ),
  new FoodInfo(
    FeaturedFoodsImg,
    "Vegetable Burger",
    "Fast Food",
    650.0,
    "Healthy and delicious burger made with fresh vegetables and a homemade patty."
  ),
];

export default FoodInfo;
export { foodList };
