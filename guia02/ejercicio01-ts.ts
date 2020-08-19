function area(valor1:number, valor2:number){
    return (valor1*valor2);
}
class Rombo {
diagonal_vertical:number;
diagonal_horizontal:number;
    constructor(_diagonal_vertical:number, _diagonal_horizontal:number){
        this.diagonal_horizontal=_diagonal_horizontal;
        this.diagonal_vertical=_diagonal_vertical;
        console.log(area(this.diagonal_horizontal,this.diagonal_vertical));
    }
    
}
let rombo=new Rombo(15,25);