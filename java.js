alert("Calculador de promedio de edades ✌️\n -----------por Sebastian Uribe Alvarez-----------");

let NumPer = parseInt(prompt("cuantas personas registrara"));//numero de personas 
if(Number.isNaN(NumPer) == true){
    while(Number.isNaN(NumPer) == true){
        alert("Porfavor ingrese algun valor Valido");
        NumPer = parseInt(prompt("cuantas personas registrara"));
    }
}
let RegEd;//Registro de las edades 
let AcumEd = 0; //acumulador de edades 
let n;//ciclo

for(n=1; n<=NumPer;n++){
    RegEd = parseInt(prompt("Ingresar la edad de la persona #"+n));
    
    if(Number.isNaN(RegEd) == true){
        while(Number.isNaN(RegEd) == true){
            alert("Porfavor ingrese algun valor");
            RegEd = parseInt(prompt("Ingresar la edad de la persona #"+n));
            
        }
    }
    AcumEd = AcumEd+RegEd;
    RegEd = NaN;
    
}
console.log(`El promedio de las edades de ${NumPer} personas es : ${AcumEd/NumPer}`);
alert(`El promedio de las edades de ${NumPer} personas es : ${AcumEd/NumPer}`);