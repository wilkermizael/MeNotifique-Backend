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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
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
exports.sendMessageWhatsApp = sendMessageWhatsApp;
var axios_1 = require("axios");
function sendMessageWhatsApp(students) {
    return __awaiter(this, void 0, void 0, function () {
        var API_KEY, API_URL, results, promises, error_1;
        var _this = this;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    API_KEY = process.env.API_KEY;
                    API_URL = process.env.API_URL;
                    results = [];
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    promises = students.map(function (student) { return __awaiter(_this, void 0, void 0, function () {
                        var phoneNumber, body, error_2;
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    phoneNumber = "55".concat(student.phone_responsible);
                                    body = {
                                        number: phoneNumber,
                                        textMessage: {
                                            text: student.is_present
                                                ? "Ol\u00E1 ".concat(student.name_responsible, ", seu filho(a) ").concat(student.name_student, " est\u00E1 presente hoje! Muito obrigado pela coopera\u00E7\u00E3o!")
                                                : "Ol\u00E1 ".concat(student.name_responsible, ", seu filho(a) ").concat(student.name_student, " *N\u00C3O* compareceu hoje!\nVoc\u00EA pode entrar em contato com a escola no n\u00FAmero (31) 3344-5566 para mais informa\u00E7\u00F5es."),
                                        },
                                    };
                                    _b.label = 1;
                                case 1:
                                    _b.trys.push([1, 3, , 4]);
                                    return [4 /*yield*/, axios_1.default.post(API_URL, body, {
                                            headers: {
                                                "Content-Type": "application/json",
                                                apikey: API_KEY,
                                            },
                                            timeout: 5000,
                                        })];
                                case 2:
                                    _b.sent();
                                    results.push({ phone: phoneNumber, status: "success" });
                                    return [3 /*break*/, 4];
                                case 3:
                                    error_2 = _b.sent();
                                    console.error("Erro ao enviar mensagem para:", phoneNumber, ((_a = error_2.response) === null || _a === void 0 ? void 0 : _a.data) || error_2.message);
                                    results.push({ phone: phoneNumber, status: "error", error: error_2.message });
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); });
                    return [4 /*yield*/, Promise.all(promises)];
                case 2:
                    _b.sent(); // Aguarda todas as requisições terminarem
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    console.error("Erro geral na requisição à API:", ((_a = error_1.response) === null || _a === void 0 ? void 0 : _a.data) || error_1.message);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/, results];
            }
        });
    });
}
