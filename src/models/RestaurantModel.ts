import mongoose from "mongoose";
const restaurantSchema = new mongoose.Schema(
  {
    name: {
      type: String
    },
    latitude: {
      type: Number
    },
    longitude: {
      type: Number
    },
    category: {
      type: String
    },
    menu: {
      type: String
    }
  },
  {
    collection: "RESTAURANTS"
  }
);

export const RestaurantModel = mongoose.model("RESTAURANTS", restaurantSchema);
