//declaro la funcion principal
function crearUsuario(nombre,edad,callback){
    setTimeout(function(){
        let usuario={
            nombreUsuario:nombre,
            edadUsuario:edad
        }
        //llamando callback
        callback(usuario)
    },2000)
}
//llamo la funcion principal
crearUsuario("Darvis",15,function(usuario){
    if(usuario.edadUsuario >=18){
        console.log("si lo tengo")
    }
    else{
        console.log("no lo tengo")
    }
})