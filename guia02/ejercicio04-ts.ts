function suma(valor1:number, valor2:number){
    return (valor1+valor2);
}
function resta(valor1:number, valor2:number){
return (valor1-valor2);
}
function multiplicacion(valor1:number, valor2:number){
return (valor1*valor2);
}
function division(valor1:number, valor2:number){
return (valor1/valor2);
}
class Calculadora {
numero1:number;
numero2:number;
constructor(_numero1:number, _numero2:number){
    this.numero1=_numero1;
    this.numero2=_numero2;
    console.log("Suma: "+suma(this.numero1,this.numero2)+ " Resta: "+resta(this.numero1,this.numero2)+" Multiplicacion: "+multiplicacion(this.numero1,this.numero2)+" Division: "+division(this.numero1,this.numero2));
}

}
let calculadora=new Calculadora(15,25);