import CategoryImg from "../assets/images/featuredFood/Briyani.jpg";
class CategoryInfo {
  constructor(image, name, type) {
    this.image = image;
    this.name = name;
    this.type = type;
  }
}

const categorySampleList = [
  new CategoryInfo(CategoryImg, "Biriyanies", "Main Course"),
  new CategoryInfo(CategoryImg, "Kottu", "Main Course"),
  new CategoryInfo(CategoryImg, "Soft Drinks", "Beverages"),
  new CategoryInfo(CategoryImg, "Rice & Curry", "Main Course"),
];

export default CategoryInfo;
export { categorySampleList };
