
const { app, BrowserWindow } = require('electron')

function createWindow () {
    // Crea la ventana del navegador.
    const win = new BrowserWindow({
        // iPhone 5/SE
        minWidth: 320,
        minHeight: 568,
        width: 320,
        height: 568,
        resizable: true,
        maximizable: true,
        title: "ch47",
        icon: "img/logo/128x128.png",
        frame: true, // bordes
        autoHideMenuBar: true, // Auto hide the menu bar unless the Alt key is pressed.
        webPreferences: {
            nodeIntegration: true,
            textAreasAreResizable: false,
            navigateOnDragDrop: false, // Whether dragging and dropping a file or link onto the page causes a navigation.
            spellcheck: false // Whether to enable the builtin spellchecker.
        },
        show: false
    })

    // y carga el index.html de la aplicación.
    win.loadFile('win/main.html')

    // Abre las herramientas de desarrollo (DevTools).
    // win.webContents.openDevTools()

    win.once('ready-to-show', () => {
        win.show()
    })
}

// Este método se llamará cuando Electron haya finalizado
// la inicialización y esté preparado para crear la ventana del navegador.
// Algunas APIs pueden usarse sólo después de que este evento ocurra.
app.whenReady().then(createWindow)

// Finaliza cuando todas las ventanas estén cerradas.
app.on('window-all-closed', () => {
    // En macOS es común para las aplicaciones y sus barras de menú
    // que estén activas hasta que el usuario salga explicitamente con Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // En macOS es común volver a crear una ventana en la aplicación cuando el
    // icono del dock es clicado y no hay otras ventanas abiertas.
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})

// En este archivo puede incluir el resto del código del proceso principal específico
// de su aplicación. También puedes ponerlos en archivos separados y requerirlos aquí.


// ----------------------------------------------------------------------------
// var net = require('net');
// console.log("hola");
