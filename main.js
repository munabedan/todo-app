/*...load two modules 
app:
    control applications event lifecycle
BrowserWindow:
    create and control browser windows
*/
const READJSON =require('./readjson');
const WRITEJSON =require('./writejson');
const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')
   
let student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};
let win

/*
Create a new browser window and attach a url to it.
*/
function createWindow(){
    win = new BrowserWindow({width:600,height:400})
    win.setMenuBarVisibility(false)
    win.loadURL(url.format({
        pathname:path.join(__dirname,'index.html'),
        protocol:'file:',
        slashes: true
    }))
}
/*
usage of read/writejson data
READJSON.jsondata('./package.json');
READJSON.rawdata('./package.json');

WRITEJSON.writejson(student);*/

app.on('ready', createWindow)