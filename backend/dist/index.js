"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const apiReq_1 = __importDefault(require("./services/apiReq"));
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
// Använd routes från items.ts
app.use('/api/items', apiReq_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
