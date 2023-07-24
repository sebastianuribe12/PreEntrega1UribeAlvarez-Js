alert("Bienvenid@ al calculador de coste de hotel  ✌️\n -----------por Sebastian Uribe Alvarez----------- ");

let NumPer = parseInt(prompt("cuantas personas registrara\n (personas por habitacion 4)"));//numero de personas que estaran hospedadas
if(Number.isNaN(NumPer) == true){
    while(Number.isNaN(NumPer) == true){
        alert("Por favor ingrese algun valor Valido");
        NumPer = parseInt(prompt("cuantas personas se Hospedaran"));
    }
}


let Regdia = parseInt(prompt("cuantos dias se quedaran"));//Registro de los dias
if(Number.isNaN(Regdia) == true){
    while(Number.isNaN(Regdia) == true){
        alert("Por favor ingrese algun valor Valido");
        Regdia = parseInt(prompt("cuantas dias se quedaran"));//VALIDACION DE LOS DATOS
    }
}
let cost; // costo por noche
let NumH//numero de habitaciones
let costViaje
let aux
cost = 30;

if( NumPer >= 4){ //VER SI SE PUEDE DIVIDIR ENTERO
    if( NumPer % 4 == 0){
        NumH = NumPer/4;
    }
    else{
        aux=(NumPer)/4;// tomamos el numero no entero y lo convertimos a entero le sumamos 1 a las habitaciones
        NumH = aux -((NumPer%4)/4)+1;
    }
}
else{
    NumH =1;
}
console.log(`El precio total del viaje de ${NumPer} personas por ${Regdia} noches en ${NumH} habitaciones es : ${(NumH*Regdia)*cost} USD \n(COSTO POR HABITACION 30 USD)`);
alert(`El precio total del viaje de ${NumPer} personas por ${Regdia} noches en ${NumH} habitaciones es : ${(NumH*Regdia)*cost} USD \n(COSTO POR HABITACION 30 USD)`);