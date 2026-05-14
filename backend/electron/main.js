const { rejects } = require('assert');
const { error } = require('console');
const { resolve } = require('dns');
const { app, BrowserWindow } = require('electron');
const path = require('path');

function create_win(index) {
    const win = new BrowserWindow({
        width: 500,
        height: 800,

        minWidth: 500,
        minHeight: 800
    });
    win.loadFile(index)
}
const index = path.join(__dirname,'..', '..', 'frontend', 'index.html');

/*
const listo = new app( (resolve, rejects) => {
    success = true;
    if (success){
        resolve('Operation resolved');
    }else{
        rejects('Operation rejected')
    }

});

listo.whenReady
*/
app.whenReady()
    .then(() => { create_win(index); }
    )
    .catch((error) => { console.error('Ocurrio un error al abrir la app', error) }
    );

