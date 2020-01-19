import { buildSchema } from "graphql";

export const schema = buildSchema(`
  type Restaurant {
    name: String,
    latitude: Float,
    longitude: Float,
    category: String,
    menu: String
  },
  type Query {
    getRandomizedRestaurant(excludedCategories: [String]): Restaurant,
    hello: String
  },
  type Mutation {
    addRestaurant(restaurant: RestaurantInput): Restaurant
  },
  input RestaurantInput {
    name: String,
    latitude: Float,
    longitude: Float,
    category: String,
    menu: String
  }
`);
