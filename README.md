# react-electron-parcel
Simple Barebones app running React, Electron and Parcel in a simple but highly efficient way.

This boilerplate is focused in agile desktop apps development.
![screenshot](https://raw.githubusercontent.com/lucascassiano/react-electron-parcel/master/docs/screenshot2.png)

## Setup

![screenshot](https://raw.githubusercontent.com/lucascassiano/react-electron-parcel/master/docs/terminal.png)
```
git clone https://github.com/lucascassiano/react-electron-parcel/ app
cd app
npm install 
npm start
```

## App structure
```javascript
engine
    index.js
    sys
        /*system modules*/
        ...
        //Add your low-level functions here
    app
        /*compiled front-end files*/
        App.js
        index.html
src
    /*ES6 ~uncompiled~ files*/
    App.js //Main React Component
    index.html //HTML entry
    index.js //react-dom renderer
    ... //add all your UI files here
```

## Real-time code Updates
This boilerplate uses *babel-register* to compile from ES6 to ES5 in real-time. Also it uses Parcel, watching the /src/ directory.

## React Components *hot reload*
```
//.babelrc
{
"plugins":["react-hot-loader/babel"]
}
```

## Exporting Applications
```
npm run package
```
or to package to specific OS:
```
npm run build
npm run package:mac
npm run package:win
npm run package:linux
```

## CSS, SVG and Images
Parcel handles all files bundling, so you can use inline file imports.

```javascript
import logo from "./logo.svg"

<img src={logo}/>
```
## Extra Info
- :rotating_light: Using Electron @ 3.0 beta

