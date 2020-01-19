"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.restaurantSchema = [
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
];
