import { CategoryInfo, CategoryNameInfo } from "../models/categoryInfo";
import api from "./baseUrl";

const CategoryApi = {
  getCategoryName: async () => {
    try {
      const response = await api.get("/4f738217-2081-4600-ac57-c622c69a25e1");

      console.log(response);
      if (response.data && response.data.categories) {
        return response.data.categories.map(
          (item) => new CategoryNameInfo(item.id, item.name)
        );
      } else {
        console.error("No categories found in response.");
        return null;
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
      return null;
    }
  },

  getCategories: async () => {
    try {
      const response = await api.get("/e9898209-dd87-4084-99ea-a56a31471676");

      console.log(response);
      if (response.data && response.data.categories) {
        return response.data.categories.map(
          (item) => new CategoryInfo(item.id, item.image, item.name, item.type)
        );
      } else {
        console.error("No categories found in response.");
        return null;
      }
    } catch (err) {
      console.error("Error fetching categories:", err);
      return null;
    }
  },
};
export default CategoryApi;
