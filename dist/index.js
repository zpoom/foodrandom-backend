"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var const_1 = require("./config/const");
var express_graphql_1 = __importDefault(require("express-graphql"));
var graphql_1 = require("./graphql");
var cors_1 = __importDefault(require("cors"));
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
var MONGO_URI = "mongodb+srv://sorawit:sunthawatrodom@cluster0-b4ovo.mongodb.net/FOOD-RANDOM?retryWrites=true&w=majority";
console.log("start connecting to the database...");
mongoose_1.default.Promise = global.Promise;
mongoose_1.default
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(function () { return console.log("[success] connected to the database."); })
    .catch(function (err) {
    console.log("[failed] disconnected from the the database.");
});
app.use(cors_1.default({
    origin: true,
    methods: "GET, POST",
    credentials: true,
    preflightContinue: true,
    maxAge: 600
}));
app.post("/graphql", express_graphql_1.default({
    schema: graphql_1.schema,
    rootValue: graphql_1.resolver,
    graphiql: true
}));
app.use("/graphql", express_graphql_1.default({
    schema: graphql_1.schema,
    rootValue: graphql_1.resolver,
    graphiql: true
}));
app.listen(const_1.PORT, function () {
    console.log("Server is listening on port " + const_1.PORT);
});
