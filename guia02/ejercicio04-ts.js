function suma(valor1, valor2) {
    return (valor1 + valor2);
}
function resta(valor1, valor2) {
    return (valor1 - valor2);
}
function multiplicacion(valor1, valor2) {
    return (valor1 * valor2);
}
function division(valor1, valor2) {
    return (valor1 / valor2);
}
var Calculadora = /** @class */ (function () {
    function Calculadora(_numero1, _numero2) {
        this.numero1 = _numero1;
        this.numero2 = _numero2;
        console.log("Suma: " + suma(this.numero1, this.numero2) + "Resta: " + resta(this.numero1, this.numero2) + " Multiplicacion: " + multiplicacion(this.numero1, this.numero2) + " Division: " + division(this.numero1, this.numero2));
    }
    return Calculadora;
}());
var calculadora = new Calculadora(15, 25);
