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
// src/api/items.ts
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const router = (0, express_1.Router)();
const DATA_URL = 'https://antonk95.github.io/dummy-api/data.json';
// GET /api/items - Hämta alla objekt
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get(DATA_URL);
        res.json(response.data);
    }
    catch (error) {
        console.error('Failed to fetch items:', error);
        res.status(500).json({ message: 'Error fetching items' });
    }
}));
// GET /api/items/:id - Hämta ett objekt med specifikt ID
router.get('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const response = yield axios_1.default.get(DATA_URL);
        const item = response.data.find((item) => item.id === id);
        if (item) {
            res.json(item);
        }
        else {
            res.status(404).json({ message: 'Item not found' });
        }
    }
    catch (error) {
        console.error('Failed to fetch item by ID:', error);
        res.status(500).json({ message: 'Error fetching item' });
    }
}));
exports.default = router;
