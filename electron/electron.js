//'use strict'; 

const { app, BrowserWindow } = require('electron');
const path = require("path");
//const isDev = require("electron-is-dev");
const mainDir = path.basename(__dirname);
const isDev = require("electron-is-dev");
//const __parentDir = path.dirname(module.parent.filename);

if (isDev && !process.env.WEBBASED) {
    require('electron-reload')(__dirname);
    const electronHot = require('electron-hot-loader');
    electronHot.install();
    electronHot.watchJsx(['src/**/*.jsx']);
    electronHot.watchCss(['src/**/*.css']);
}

//require('./index.js');
// Standard stuff
app.on('ready', function() {
        let mainWindow = new BrowserWindow({ width: 800, height: 600 });
        const dirname = __dirname || path.resolve(path.dirname(''));

        if (process.env.WEBBASED) {
            mainWindow.loadURL("http://localhost:1234");
        } else {
            mainWindow.loadURL(`file://${path.join(dirname, "./index.html")}`);
        }
    }

);