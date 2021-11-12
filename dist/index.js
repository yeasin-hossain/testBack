"use strict";
//external import
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
// DB Connection Class
var db_1 = __importDefault(require("./src/util/db"));
var routes_1 = __importDefault(require("./src/routes"));
var morgan_1 = __importDefault(require("morgan"));
// middlewares use
require("dotenv").config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("combined"));
// mongoDB connection, just pass the mongo url
new db_1.default(process.env.mongoURL);
//routes
app.use("/api", routes_1.default);
//default error handlers
var errorHandlers = function (err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({ error: err });
};
app.use(errorHandlers);
var port = process.env.PORT || 5000;
app.listen(port, function () {
    console.log("listening on port " + port + " \uD83E\uDD1F\uD83D\uDD25\uD83E\uDD1F\uD83C\uDDE7\uD83C\uDDE9");
});
