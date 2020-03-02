const electron = require("electron");
const {app, BrowserWindow, globalShortcut} = electron;

let mainWindow;

app.on("ready", ()=> {
    mainWindow = new BrowserWindow({
        width: 1000,
        height: 700
    });
    mainWindow.setTitle("Mira mama estoy programando");
    mainWindow.loadURL("https://web.whatsapp.com/", {
        userAgent : 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36'}

    );

    mainWindow.on("closed", ()=> {
        mainWindow = null;
    });
    
});