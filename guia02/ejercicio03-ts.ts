function salario(valor1:number){
    
    return (valor1-((valor1*0.075)+(valor1*0.1)));
}
class Empleado {
nombre:string;
salario:number;
    constructor(_nombre:string, _salario:number){
        this.nombre=_nombre;
        this.salario=_salario;
        console.log("El empleado :"+this.nombre+" tendra un salario neto: $" +salario(this.salario));
    }
    
}
let empleado=new Empleado("Christian Batres",1525);