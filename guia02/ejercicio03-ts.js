function salario(valor1) {
    return (valor1 - ((valor1 * 0.075) + (valor1 * 0.1)));
}
var Empleado = /** @class */ (function () {
    function Empleado(_nombre, _salario) {
        this.nombre = _nombre;
        this.salario = _salario;
        console.log("El empleado :" + this.nombre + " tendra un salario neto: $" + salario(this.salario));
    }
    return Empleado;
}());
var empleado = new Empleado("Christian Batres", 1525);
