"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var MONGO_URI = "mongodb+srv://sorawit:sunthawatrodom@cluster0-b4ovo.mongodb.net/test?retryWrites=true&w=majority";
mongoose_1.default.Promise = global.Promise;
exports = mongoose_1.default.connect(MONGO_URI, { useNewUrlParser: true }).then(function () {
    console.log("[success] connected to database.");
}, function (error) {
    console.log("[failed] : " + error);
    process.exit();
});
