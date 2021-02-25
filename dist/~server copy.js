"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const net_1 = __importDefault(require("net"));
const params_config_1 = require("./config/params.config");
const fs_1 = __importDefault(require("fs"));
const app = express_1.default();
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// creating TCP Server
const server = net_1.default.createServer(conn => {
    console.log("New Client");
    conn.on('data', data => {
        conn.write(data + "\r\n");
    });
    conn.on('end', () => {
        conn.write("Client Left");
    });
});
// TCP server port setup
server.listen(params_config_1.config.APP_SERVER.PORT);
const fileContents = fs_1.default.readFileSync("./public/doc/my.har");
const jsonContents = JSON.parse(fileContents.toString());
// Total request count
const requestUrlCount = jsonContents.log.entries.length;
console.log("Request Count: " + requestUrlCount);
// Count of status codes
const responseStatus = jsonContents.log.entries.map(entry => entry.response.status);
const responseStatusCounts = {};
responseStatus.forEach(el => responseStatusCounts[el] = 1 + (responseStatusCounts[el] || 0));
console.log("Status Codes Count: ");
console.log(responseStatusCounts);
// List of all host
const requestHeaders = jsonContents.log.entries.map(entry => entry.request.headers);
const requestHeadersArr = [];
requestHeaders.forEach(element => {
    element.forEach(elm => {
        if (elm.name === "Host")
            requestHeadersArr.push(elm);
    });
});
console.log("List of all host: ");
console.log(requestHeadersArr);
const requestFor500ResponseStatusData = [];
const requestFor500ResponseStatus = jsonContents.log.entries.map(entry => {
    if (entry.response.status.toString() === "500") {
        requestFor500ResponseStatusData.push(entry.request);
    }
});
console.log("Request returing 500 response status: ");
console.log(requestFor500ResponseStatusData);
/*app.all( "/", ( req, res ) => {
  res.json( { message: "Hello world!" } );

});


app.post( "/upload-har", ( req, res ) => {
    res.json( { message: "Hello upload har!" } );
});


// start the Express server
app.listen( config.APP_SERVER.PORT, () => {
    console.log( `server started at http://localhost:${ config.APP_SERVER.PORT }` );
});*/
//# sourceMappingURL=~server%20copy.js.map