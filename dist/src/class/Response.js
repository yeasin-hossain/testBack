"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_codes_1 = require("http-status-codes");
var ResponseMessage = /** @class */ (function () {
    function ResponseMessage() {
    }
    ResponseMessage.prototype.successResponse = function (data) {
        return {
            message: "success",
            code: 200,
            status: (0, http_status_codes_1.getReasonPhrase)(200),
            error: false,
            response: data,
        };
    };
    ResponseMessage.prototype.notFoundResponse = function (message) {
        return {
            message: message,
            code: 404,
            status: (0, http_status_codes_1.getReasonPhrase)(404),
            error: true,
            response: null,
        };
    };
    ResponseMessage.prototype.badRequestResponse = function (message) {
        return {
            message: message,
            code: 400,
            status: (0, http_status_codes_1.getReasonPhrase)(400),
            error: true,
            response: null,
        };
    };
    ResponseMessage.prototype.serverErrorResponse = function () {
        return {
            message: "Internal Server Error",
            code: 500,
            status: (0, http_status_codes_1.getReasonPhrase)(500),
            error: true,
            response: null,
        };
    };
    return ResponseMessage;
}());
exports.default = ResponseMessage;
