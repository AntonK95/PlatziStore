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
// src/server.ts
const express_1 = __importDefault(require("express"));
const apiReq_1 = require("./services/apiReq");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield (0, apiReq_1.fetchData)();
        res.json(data);
    }
    catch (error) {
        console.log('error fetching data', error);
        res.status(404).send('Error fetching data');
    }
}));
app.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const data = yield (0, apiReq_1.fetchDataById)(id);
        res.json(data);
    }
    catch (error) {
        console.log('Error getting data by ID:', error);
        res.status(404).send(`Error getting item with ID ${req.params.id}`);
    }
}));
// Radera ett item baserat på id
app.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const deletedItem = yield (0, apiReq_1.deleteDataById)(id);
        res.json(deletedItem);
    }
    catch (error) {
        console.log('Error getting data by ID:', error);
        res.status(404).send(`Error getting item with ID ${req.params.id}`);
    }
}));
// Filtrera produkter baserat på category
app.get('/category/:category', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category } = req.params;
        const data = yield (0, apiReq_1.fetchDataByCategory)(category);
        res.json(data);
    }
    catch (error) {
        console.log('Could not filter by category');
        console.error(`Error fetching data for category ${req.params.category}:`, error);
        res.status(404).send('Error fetching data for this category');
    }
}));
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
