function pares (vector){
    var sw=true;
    for ( i=0; i<vector.length; i++){
        if (vector[i] % 2 !=0)
        
        return false;
    
    }
    return sw
}

const arr =function todospares (vector){
    return vector.every((data) => data %2==0);
}
const saludos =function (nombre ,edad ){
    console.log('Hola', nombre,'tu edad e:' , edad);
}
const fact =(n)=> {
    if (n==0){
        return 1;
    }
    else{
        return n*fact(n-1);
    }
}
function vecotrespositivos(vectores){
    if (fromIndex){
        console.log('El vector es positivo');
    }
    else {
        console.log('El vector no es positivo');
    }
} 
function sumatoriadevector(numero){
    var suma=0;
    vector.forEach(numero, function(numero){
suma+=numero;
    });
return suma;
}
//  diseñe una funcion que
//verifique si todos los elementos del vector de un vector son positivos 
//recorrer e imprimir todos los elementos del vector 
const imprimir=(vector)=>{
    vector.forEach((element,indice) => {
        console.log("Elementos # ",indice, "es :" , element);
      });
}
const x=[2,4,6,8,10,13];
//console.log('Primeros paso en progrmacaion funcional');
//console.log('El vector tiene solo elementos pares ', pares(x));
//tarea: Usando progrmacion funcional diseñe que calcule la sumatoria del vector 
//2)cinsultar (sintaxis y ejemplos de ):
//filter-ForEach . every .reduce-some-map

//console.log('El vector tiene solo elementos pares ', arr(x));
//saludos ("saul", 20);
//console.log("El factorial de 5 es:", fact(5));
//vecotrespositivos(x);
//imprimir(x);
sumatoriadevector(x);