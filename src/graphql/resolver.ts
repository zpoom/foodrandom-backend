// import { dummyRestaurants } from "../data/mockDatabase";
import { dummyRestaurants } from "../database/mockDatabase";
import { Restaurant } from "../interfaces";
import { RestaurantModel } from "../models/RestaurantModel";
import { MongooseDocument } from "mongoose";

export const resolver = {
  hello: () => {
    return "Hello World!!";
  },
  getRandomizedRestaurant: async (excludedCategories: any) => {
    excludedCategories = excludedCategories.excludedCategories;
    try {
      const restaurants = await RestaurantModel.find({
        category: { $nin: excludedCategories }
      });
      // console.log(restaurants);
      const randomIndex: number = Math.floor(
        Math.random() * restaurants.length
      );
      return restaurants[randomIndex];
    } catch (err) {
      console.log(err);
      throw new Error("fetch failed.");
    }
  },
  addRestaurant: async (restaurantInput: Restaurant) => {
    const restaurant = JSON.parse(JSON.stringify(restaurantInput));
    // console.log(restaurant.restaurant);
    const obj = new RestaurantModel(restaurant.restaurant);
    try {
      const res = await obj.save();
      // console.log("saved");
      return res;
    } catch (err) {
      console.log(err);
    }
  }
};
