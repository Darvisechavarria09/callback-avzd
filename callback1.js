//DECLARANDO LA FUNCION PRINCIPAL
function principal(nombre,callback){

    setTimeout(function(){
        //PROCESO
        console.log('Hola mundo con',nombre)
        //LLAMO AL CALLBACK
        callback()
    },4000);
}

principal("Darvis",function(){
    console.log('Como Estas?, soy el callback')
})