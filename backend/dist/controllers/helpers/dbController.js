"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = connectDB;
const mongoose_1 = __importDefault(require("mongoose"));
function connectDB() {
    mongoose_1.default.connect(process.env.DB_URL);
    const connection = mongoose_1.default.connection;
    connection.once('open', () => {
        console.log('Database connected');
    });
}
