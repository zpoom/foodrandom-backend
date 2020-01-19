"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var RestaurantModel_1 = require("../models/RestaurantModel");
exports.resolver = {
    hello: function () {
        return "Hello World!!";
    },
    getRandomizedRestaurant: function (excludedCategories) { return __awaiter(void 0, void 0, void 0, function () {
        var restaurants, randomIndex, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    excludedCategories = excludedCategories.excludedCategories;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, RestaurantModel_1.RestaurantModel.find({
                            category: { $nin: excludedCategories }
                        })];
                case 2:
                    restaurants = _a.sent();
                    console.log(restaurants);
                    randomIndex = Math.floor(Math.random() * restaurants.length);
                    return [2 /*return*/, restaurants[randomIndex]];
                case 3:
                    err_1 = _a.sent();
                    console.log(err_1);
                    throw new Error("fetch failed.");
                case 4: return [2 /*return*/];
            }
        });
    }); },
    addRestaurant: function (restaurantInput) { return __awaiter(void 0, void 0, void 0, function () {
        var restaurant, obj, res, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    restaurant = JSON.parse(JSON.stringify(restaurantInput));
                    console.log(restaurant.restaurant);
                    obj = new RestaurantModel_1.RestaurantModel(restaurant.restaurant);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, obj.save()];
                case 2:
                    res = _a.sent();
                    console.log("saved");
                    return [2 /*return*/, res];
                case 3:
                    err_2 = _a.sent();
                    console.log(err_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); }
};
