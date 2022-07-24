let fs = require("fs");

const PATH = "../ProgramaNombres/archivos/"

fs.readdir(PATH, (error, araydeNombresDeLosArchivos) => {
  if (error) {
    throw error;
  } else {
    console.log(araydeNombresDeLosArchivos)

    renombrar(araydeNombresDeLosArchivos);
    
  }
});

function cambiarElNombre(nombre) {
  nombre = nombre.replace(" ", "");
  let recorte = nombre.split("_");
  let nombreCortado = "";
  for (let i = 0; i < 3; i++) {
    nombreCortado += recorte[i] + "_";
  }
  return `${nombreCortado}.pdf`;
}

function renombrar(nombres) {
  nombres.forEach((cadaNombre) => {
    fs.rename(PATH + cadaNombre, PATH + cambiarElNombre(cadaNombre), (err) => {
      if (err) {
        throw err;
      }

      console.log("Rename complete!");
    });
  });
}
