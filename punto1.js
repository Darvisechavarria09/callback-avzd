//DECLARO FUNCION PRINCIPAL
function recibirAprendices(nombre,planeta,edad,estatura,callback){
    setTimeout(function(){
        let aprendices={nombre,planeta,edad,estatura}
        let aprendicesFiltrados= aprendices.filter(function(aprendices){
            return(aprendices)
        })
        //llamo al callback
        callback(planosFiltrados)
    },1000)
}