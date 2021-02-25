"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const params_config_1 = require("./config/params.config");
// import fs from "fs";
const app = express_1.default();
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
const options = {
    port: params_config_1.config.APP_SERVER.PORT,
    host: params_config_1.config.APP_SERVER.HOST
};
// creating TCP Server
/*const client = net.createConnection(options, () => {
  console.log("New Client Connected!");
});

client.on('data', data => {
  console.log("Server ResponseData..");
  console.log(data.toString());
})*/ 
//# sourceMappingURL=client.js.map