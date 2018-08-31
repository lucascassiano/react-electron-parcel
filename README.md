# react-electron-parcel
Simple Barebones app running React, Electron and Parcel in a simple but highly efficient way

## install
```
git clone https://github.com/lucascassiano/react-electron-parcel/
```
```
cd react-electron-parcel
```
```
npm start
```
## App structure
```javascript
engine
    index.js
    sys
        /*system modules*/
    app
        /*compiled front-end files*/
        App.js
        index.html
src
    /*ES6 ~uncompiled~ files*/
    App.js //Main React Component
    index.html //HTML entry
    index.js //react-dom renderer
```
## React Components *hot reload*
```
react-hot-loader/babel
```

## Compiler
This boilerplate uses *babel-register* to compile from ES6 to ES5.


## :rotating_light:

