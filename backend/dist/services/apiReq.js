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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchDataByCategory = exports.deleteDataById = exports.fetchDataById = exports.fetchData = void 0;
const axios_1 = __importDefault(require("axios"));
const API_URL = 'https://antonk95.github.io/dummy-api/data.json';
// Hämta all data
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(API_URL);
    return response.data;
});
exports.fetchData = fetchData;
// Hämta data baserat på ID
// Mitt api stödjer inte dynamiska id-baserade anrop. 
// För att kringå det så returnerar vi hela listan och sedan filtrerar/letar efter det id vi sökt på
const fetchDataById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(API_URL); // Hämta hela listan
    const item = response.data.find(data => data.id === id); // Filtrera baserat på ID
    if (!item) {
        throw new Error(`Item with ID ${id} not found`);
    }
    return item;
});
exports.fetchDataById = fetchDataById;
const deleteDataById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(API_URL);
    const data = response.data;
    const itemIndex = data.findIndex(data => data.id === id);
    if (itemIndex === -1) {
        throw new Error(`Item with ID ${id} not found.. Could not delete`);
    }
    else {
        const [deletedItems] = data.splice(itemIndex, 1); // Ta bort item med id från array
        console.log(`Deleted item with ID ${id}`, deletedItems);
        return deletedItems;
    }
});
exports.deleteDataById = deleteDataById;
const fetchDataByCategory = (category) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get(API_URL);
    return response.data.filter(item => item.category.name.toLowerCase() === category.toLowerCase());
});
exports.fetchDataByCategory = fetchDataByCategory;
