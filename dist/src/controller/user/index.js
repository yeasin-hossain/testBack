"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Crud_1 = __importDefault(require("../../class/Crud"));
var Response_1 = __importDefault(require("../../class/Response"));
var getReasonPhrase = require("http-status-codes").getReasonPhrase;
var _a = require("bcrypt"), genSaltSync = _a.genSaltSync, hash = _a.hash, compare = _a.compare;
var jwt = require("jsonwebtoken");
var User = require("../../model/user");
var crud = new Crud_1.default(User);
var response = new Response_1.default();
var UserClass = /** @class */ (function () {
    function UserClass() {
    }
    UserClass.prototype.login = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var userCredentials, email, password, singUser, validatePassword, name_1, role, createdAt, _id, ban, branch, payload, token, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        userCredentials = req.body;
                        email = userCredentials.email, password = userCredentials.password;
                        return [4 /*yield*/, User.findOne({ email: email })];
                    case 1:
                        singUser = _a.sent();
                        if (!singUser) {
                            return [2 /*return*/, res.json(response.notFoundResponse("User Not Found"))];
                        }
                        return [4 /*yield*/, compare(password, singUser.password)];
                    case 2:
                        validatePassword = _a.sent();
                        if (!validatePassword) {
                            return [2 /*return*/, res.json(response.badRequestResponse("Email Or Pass Not Match"))];
                        }
                        name_1 = singUser.name, role = singUser.role, createdAt = singUser.createdAt, _id = singUser._id, ban = singUser.ban, branch = singUser.branch;
                        payload = {
                            email: email,
                            name: name_1,
                            role: role,
                            ban: ban,
                            createdAt: createdAt,
                            _id: _id,
                            branch: branch,
                        };
                        return [4 /*yield*/, jwt.sign(payload, process.env.JWT_SECRET, {
                                expiresIn: "1day",
                            })];
                    case 3:
                        token = _a.sent();
                        return [2 /*return*/, res.json(response.successResponse(__assign(__assign({}, payload), { token: token })))];
                    case 4:
                        error_1 = _a.sent();
                        console.log({ loginController: error_1 });
                        res.json(response.serverErrorResponse);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    UserClass.prototype.register = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var salt, hashedPassword, savedUser, _a, email, name_2, role, createdAt, _id, ban, branch, payload, token, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 4, , 5]);
                        salt = genSaltSync(10);
                        return [4 /*yield*/, hash(req.body.password, salt)];
                    case 1:
                        hashedPassword = _b.sent();
                        return [4 /*yield*/, crud._saveData(__assign(__assign({}, req.body), { password: hashedPassword }))];
                    case 2:
                        savedUser = _b.sent();
                        _a = savedUser.response, email = _a.email, name_2 = _a.name, role = _a.role, createdAt = _a.createdAt, _id = _a._id, ban = _a.ban, branch = _a.branch;
                        payload = {
                            email: email,
                            name: name_2,
                            role: role,
                            ban: ban,
                            createdAt: createdAt,
                            _id: _id,
                            branch: branch,
                        };
                        return [4 /*yield*/, jwt.sign(payload, process.env.JWT_SECRET, {
                                expiresIn: "1day",
                            })];
                    case 3:
                        token = _b.sent();
                        res.json(response.successResponse(__assign(__assign({}, payload), { token: token })));
                        return [3 /*break*/, 5];
                    case 4:
                        error_2 = _b.sent();
                        console.log({ registerController: error_2 });
                        res.status(500).send({ message: "Internal Server Error" });
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    UserClass.prototype.getAllUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var users, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, crud._getAll("name email ban role branch")];
                    case 1:
                        users = _a.sent();
                        return [2 /*return*/, res.json(response.successResponse(users))];
                    case 2:
                        err_1 = _a.sent();
                        console.log({ getAllUser: err_1 });
                        return [2 /*return*/, res.json(response.serverErrorResponse)];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserClass.prototype.updateUser = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, user, updateUser, _a, name_3, email, ban, role, branch, _id, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        id = req.params.id;
                        user = req.body;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, crud._updateData(id, user)];
                    case 2:
                        updateUser = _b.sent();
                        _a = updateUser === null || updateUser === void 0 ? void 0 : updateUser.response, name_3 = _a.name, email = _a.email, ban = _a.ban, role = _a.role, branch = _a.branch, _id = _a._id;
                        res.json(response.successResponse({ name: name_3, email: email, ban: ban, role: role, branch: branch, _id: _id }));
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _b.sent();
                        console.log({ updateUser: error_3 });
                        return [2 /*return*/, res.json(response.serverErrorResponse)];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return UserClass;
}());
exports.default = UserClass;
