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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Response_1 = __importDefault(require("./Response"));
var response = new Response_1.default();
var Crud = /** @class */ (function () {
    function Crud(name) {
        this.modelName = name;
    }
    // সার্ভারে ডাটা সেভ করার জন্য এই মেথড ব্যবহার করব
    Crud.prototype._saveData = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var savedData, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        if (!data) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.modelName.create(data)];
                    case 1:
                        savedData = _a.sent();
                        return [2 /*return*/, response.successResponse(savedData)];
                    case 2: return [2 /*return*/, response.badRequestResponse("Fill Requeued felid")];
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.log({ crudSave: error_1 });
                        return [2 /*return*/, response.serverErrorResponse()];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    //  সব ডাটা সার্ভার থেকে পাওয়ার জন্য এটা ব্যবহার করা হবে।
    Crud.prototype._getAll = function (filter) {
        if (filter === void 0) { filter = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var allResponse, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.modelName
                                .find({}, filter)
                                .sort({ updatedAt: -1 })];
                    case 1:
                        allResponse = _a.sent();
                        if (allResponse) {
                            return [2 /*return*/, response.successResponse(allResponse)];
                        }
                        else {
                            return [2 /*return*/, response.serverErrorResponse()];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log({ crudGetAll: error_2 });
                        return [2 /*return*/, response.serverErrorResponse()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //  সব ডাটা সার্ভার থেকে পাওয়ার জন্য এটা ব্যবহার করা হবে।
    Crud.prototype._getByQuery = function (query, filter) {
        if (filter === void 0) { filter = ""; }
        return __awaiter(this, void 0, void 0, function () {
            var allResponse, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.modelName
                                .find(query, filter)
                                .sort({ updatedAt: -1 })];
                    case 1:
                        allResponse = _a.sent();
                        if (allResponse) {
                            return [2 /*return*/, response.successResponse(allResponse)];
                        }
                        else {
                            return [2 /*return*/, response.serverErrorResponse()];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_3 = _a.sent();
                        console.log({ crudGetAll: error_3 });
                        return [2 /*return*/, response.serverErrorResponse()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //  সব ডাটা সার্ভার থেকে পাওয়ার জন্য এটা ব্যবহার করা হবে।
    Crud.prototype._getSingle = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var singleItem, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.modelName.findById(id)];
                    case 1:
                        singleItem = _a.sent();
                        if (singleItem) {
                            return [2 /*return*/, response.successResponse(singleItem)];
                        }
                        else {
                            return [2 /*return*/, response.serverErrorResponse()];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_4 = _a.sent();
                        console.log({ crudGetAll: error_4 });
                        return [2 /*return*/, response.serverErrorResponse()];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    //  ডাটা আপডেট করার জন্য এটা ব্যবহার করা হবে।
    Crud.prototype._updateData = function (id, data) {
        return __awaiter(this, void 0, void 0, function () {
            var findData, updateData, updatedData, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        return [4 /*yield*/, this.modelName.findById(id)];
                    case 1:
                        findData = _a.sent();
                        if (!findData) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.modelName.findByIdAndUpdate(id, data)];
                    case 2:
                        updateData = _a.sent();
                        if (!updateData) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.modelName.findById({ _id: id })];
                    case 3:
                        updatedData = _a.sent();
                        return [2 /*return*/, response.successResponse(updatedData)];
                    case 4: return [3 /*break*/, 6];
                    case 5: return [2 /*return*/, response.notFoundResponse("Data Not Found")];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_5 = _a.sent();
                        console.log({ crudUpdate: error_5 });
                        // কেন যেন কাজ করতেছে না তাই এখানে নট ফাউন্ড রেসপন্স টা দিয়েছি
                        return [2 /*return*/, response.notFoundResponse("Data Not Found")];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    // একটা ডাটা ডিলিট করার জন্য
    Crud.prototype._deleteData = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var deleteData, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.modelName.findByIdAndRemove(id)];
                    case 1:
                        deleteData = _a.sent();
                        if (deleteData) {
                            return [2 /*return*/, response.successResponse(deleteData)];
                        }
                        else {
                            return [2 /*return*/, response.serverErrorResponse()];
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_6 = _a.sent();
                        console.log({ delete: error_6 });
                        return [2 /*return*/, response.notFoundResponse("Data Not Found")];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Crud;
}());
exports.default = Crud;
