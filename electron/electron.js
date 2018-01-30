//'use strict'; 

const { app, BrowserWindow } = require('electron');
const path = require("path");
//const isDev = require("electron-is-dev");
const mainDir = path.basename(__dirname);
const isDev = require("electron-is-dev");
//const __parentDir = path.dirname(module.parent.filename);

if (isDev && !process.env.WEBBASED)
    require('electron-reload')(__dirname);


// Standard stuff
app.on('ready', function() {
        let mainWindow = new BrowserWindow({ width: 800, height: 600 });
        //if (isDev) {
        //mainWindow.loadURL(`file://${path.join(path.dirname(''), "./index.html")}`);
        //} else {
        const dirname = __dirname || path.resolve(path.dirname(''));
        //alert(__dirname);
        if (process.env.WEBBASED) {
            mainWindow.loadURL("http://localhost:3000");
        } else {
            mainWindow.loadURL(`file://${path.join(dirname, "./index.html")}`);
        }
    }
    //mainWindow.loadURL("http://localhost:3000");
);