//'use strict'; 

const {app, BrowserWindow} = require('electron'); 
const path = require("path");
//const isDev = require("electron-is-dev");
const mainDir = path.basename(__dirname);

const __parentDir = path.dirname(module.parent.filename);

require('electron-reload')(__dirname); 

// Standard stuff
    app.on('ready', function () {
        let mainWindow = new BrowserWindow( {width:800, height:600}); 

        //mainWindow.loadURL("http://localhost:3000");
        mainWindow.loadURL(`file://${path.join(__dirname, "/index.html")}`);
    }
); 
