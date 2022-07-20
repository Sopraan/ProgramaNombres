let fs = require('fs');


let nombres= []

 fs.readdir('../Programa/archivos',(error,files) => {

    if (error){
        throw error;
    }


     files.forEach(element =>new RegExp('','g') )
        return files.push(nombres)
     

});


/*
function nombresSinEspacios(files){
  let RegEx= new RegExp('','g');
  return text.replace(files)

}
*/



/* fs.rename(file ,'./archivos',(error)=> {

    if (error){
        throw (error);
    }
});
/*


/*fs.readfile('./Programa','utf8',function(err,data){

    console.log(data)
});
*/
