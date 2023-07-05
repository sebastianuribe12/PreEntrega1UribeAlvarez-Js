alert("Calculador de promedio de edades ✌️\n -----------por Sebastian Uribe Alvarez-----------");

console.log("-------------------");
let NumPer = parseInt(prompt("cuantas personas registrara"));//numero de personas cA
let RegEd;//Registro de las edades eA
let AcumEd = 0; //acumulador de edades sA
let n;//ciclo

for(n=1; n<=NumPer;n++){
    RegEd = parseInt(prompt("Ingresar la edad de la persona #"+n));
    AcumEd = AcumEd+RegEd;
}
console.log(`El promedio de las edades de ${NumPer} personas es : ${AcumEd/NumPer}`);
alert(`El promedio de las edades de ${NumPer} personas es : ${AcumEd/NumPer}`);