import CategoryImg from "../assets/images/featuredFood/Briyani.jpg";
class CategoryInfo {
  constructor(id, image, name, type) {
    this.id = id;
    this.image = image;
    this.name = name;
    this.type = type;
  }
}

class CategoryNameInfo {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const categorySampleList = [
  new CategoryInfo(1, CategoryImg, "Biriyanies", "Main Course"),
  new CategoryInfo(2, CategoryImg, "Kottu", "Main Course"),
  new CategoryInfo(3, CategoryImg, "Soft Drinks", "Beverages"),
  new CategoryInfo(4, CategoryImg, "Rice & Curry", "Main Course"),
];

export { CategoryInfo, CategoryNameInfo, categorySampleList };
