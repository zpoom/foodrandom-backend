"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = require("graphql");
exports.schema = graphql_1.buildSchema("\n  type Restaurant {\n    name: String,\n    latitude: Float,\n    longitude: Float,\n    category: String,\n    menu: String\n  },\n  type Query {\n    getRandomizedRestaurant(excludedCategories: [String]): Restaurant,\n    hello: String\n  },\n  type Mutation {\n    addRestaurant(restaurant: RestaurantInput): Restaurant\n  },\n  input RestaurantInput {\n    name: String,\n    latitude: Float,\n    longitude: Float,\n    category: String,\n    menu: String\n  }\n");
