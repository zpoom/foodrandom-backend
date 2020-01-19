"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var connectionString = "mongodb+srv://poom:mongodbpassword@cluster0-b4ovo.mongodb.net/test?retryWrites=true&w=majority";
var restaurantSchema = new mongoose_1.default.Schema({
    name: String,
    latitude: Number,
    longitude: Number,
    category: String,
    menu: String
});
exports.default = mongoose_1.default.model("restaurant", restaurantSchema);
