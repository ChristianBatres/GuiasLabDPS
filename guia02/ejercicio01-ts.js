function area(valor1, valor2) {
    return (valor1 * valor2);
}
var Rombo = /** @class */ (function () {
    function Rombo(_diagonal_vertical, _diagonal_horizontal) {
        this.diagonal_horizontal = _diagonal_horizontal;
        this.diagonal_vertical = _diagonal_vertical;
        console.log(area(this.diagonal_horizontal, this.diagonal_vertical));
    }
    return Rombo;
}());
var rombo = new Rombo(15, 25);
