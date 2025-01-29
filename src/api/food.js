import FoodInfo from "../models/foodInfo";
import api from "./baseUrl";

const FoodApi = {
  getFeaturedFoods: async () => {
    try {
      const response = await api.get("/1a255f8f-03d8-49d0-90df-b6a36ffc98ba");

      console.log(response);
      if (response.data && response.data.foods) {
        return response.data.foods.map(
          (item) =>
            new FoodInfo(
              item.id,
              item.image,
              item.name,
              item.category,
              item.price,
              item.description
            )
        );
      } else {
        console.error("No food found in response.");
        return null;
      }
    } catch (err) {
      console.error("Error fetching foods:", err);
      return null;
    }
  },
};
export default FoodApi;
