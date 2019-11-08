var CajeroAutomatico = /** @class */ (function () {
    function CajeroAutomatico(SaldoAct) {
        this.SaldoActual = SaldoAct;
    }
    /**
     * La funcion permite generar retiros.
     * @param Saldo Es el monto que se desea retirar el valor debe ser numerico.
     */
    CajeroAutomatico.prototype.retiro = function (Saldo) {
        var lsCadena = "";
        if (Saldo > this.SaldoActual) {
            lsCadena = "El saldo que desea retirar supera su saldo actual";
        }
        if (Saldo < 0) {
            lsCadena = "El saldo no puede ser menor a 0";
        }
        if (lsCadena != "") {
            return lsCadena;
        }
        else {
            this.SaldoActual = this.SaldoActual - Saldo;
            return "Retiro exitoso. Su saldo actual es de $" + this.SaldoActual;
        }
    };
    CajeroAutomatico.prototype.trasferencia = function (Saldo, Cuenta) {
        var lsCadena = "";
        if (Saldo > this.SaldoActual) {
            lsCadena = "El saldo que desea transferir supera su saldo actual";
        }
        if (Saldo < 0) {
            lsCadena = "El saldo no puede ser menor a 0";
        }
        if (lsCadena != "") {
            return lsCadena;
        }
        else {
            this.SaldoActual = this.SaldoActual - Saldo;
            return "Transferencia exitosa. a la cuenta " + Cuenta + " Su saldo actual es de $" + this.SaldoActual;
        }
    };
    CajeroAutomatico.prototype.getSaldoActual = function () {
        return this.SaldoActual;
    };
    CajeroAutomatico.prototype.tiempoAire = function (Saldo, NumeroTel) {
        var lsCadena = "";
        if (Saldo > this.SaldoActual) {
            lsCadena = "El saldo que desea cargar supera su saldo actual en su cuenta";
        }
        if (Saldo < 0) {
            lsCadena = "El saldo no puede ser menor a 0";
        }
        if (lsCadena != "") {
            return lsCadena;
        }
        else {
            this.SaldoActual = this.SaldoActual - Saldo;
            return "Recarga exitosa al numero " + NumeroTel;
        }
    };
    /**
     * Fucnion permite pagar servios.
     * @param Saldo Es el monto que se desea pagar del servicio dado.(Numerico)
     * @param Cuenta Numero de cuenta a la que se le hara el pago.
     * @param Servico Compañia o servicio a la que se desea pagar.(AT&t  o CFE)
     */
    CajeroAutomatico.prototype.pagoServico = function (Saldo, Cuenta, Servico) {
        var lsCadena = "";
        if (Saldo > this.SaldoActual) {
            lsCadena = "El saldo que desea cargar supera su saldo actual en su cuenta";
        }
        if (Saldo < 0) {
            lsCadena = "El saldo no puede ser menor a 0";
        }
        if (Servico != "AT&t") {
            lsCadena = "Servico invalido!";
        }
        if (Servico != "CFE") {
            lsCadena = "Servico invalido!";
        }
        if (lsCadena != "") {
            return lsCadena;
        }
        else {
            this.SaldoActual = this.SaldoActual - Saldo;
            return "Pago de servicio exitoso al numero de cuenta" + Cuenta;
        }
    };
    return CajeroAutomatico;
}());
