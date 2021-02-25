import express from "express";

import path from "path";

import net from "net"

import {config} from "./config/params.config";

// import fs from "fs";

const app = express();

app.use(express.static(path.join(__dirname,'public')))

const options = {
  port: config.APP_SERVER.PORT,
  host: config.APP_SERVER.HOST
};

// creating TCP Server
/*const client = net.createConnection(options, () => {
  console.log("New Client Connected!");
});

client.on('data', data => {
  console.log("Server ResponseData..");
  console.log(data.toString());
})*/