"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var restaurantSchema = new mongoose_1.default.Schema({
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
}, {
    collection: "RESTAURANTS"
});
exports.RestaurantModel = mongoose_1.default.model("RESTAURANTS", restaurantSchema);
