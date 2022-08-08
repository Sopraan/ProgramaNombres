let fs = require("fs");

const PATH = "../ProgramaNombres/archivos/"

fs.readdir(PATH, (error, araydeNombresDeLosArchivos) => {
  if (error) {
    throw error;
  } else {
    console.log(araydeNombresDeLosArchivos)

    araydeNombresDeLosArchivos = araydeNombresDeLosArchivos.sort();

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
  return `${nombreCortado}`;
}

/*function renombrar(nombres) {
  let nombresCambiados = [];

  nombres.forEach((cadaNombre) => {
    let nuevoNombre = cambiarElNombre(cadaNombre);
    let busqueda = nombresCambiados.find(archivo => archivo.nombre === nuevoNombre);
    if (busqueda) {
      busqueda.cantidad++;
      renameNode(cadaNombre,(`${nuevoNombre}_${busqueda.cantidad}.pdf`))  
    } else {
      let archivo = {
        nombre: nuevoNombre,
        cantidad: 1
      }
      nombresCambiados.push(archivo)
      renameNode(cadaNombre,(`${nuevoNombre}_1.pdf`))
      
    }
  });
}

*/
function renombrar(nombre){
  cambiarElNombre(nombre)
nombreCortado.forEach( nombreConNumero=> {
  let temporalNombreConNumero = nombreConNumero;
  let i = 0
  let nombreCompleto =`${temporalNombreConNumero}${i++}.pdf`

fs.rename(PATH + nombreCortado, PATH + nombreCompleto , (err) => {
    if (err) {
      throw err;
    }

    console.log("Rename complete!");
  });
});



}









