class  CajeroAutomatico{
    private SaldoActual:number;
    constructor(SaldoAct:number){
        this.SaldoActual=SaldoAct;
    }
    /**
     * La funcion permite generar retiros.
     * @param Saldo Es el monto que se desea retirar el valor debe ser numerico.
     */
    retiro(Saldo:number):string{
        var lsCadena:string="";
        if (Saldo>this.SaldoActual){
            lsCadena="El saldo que desea retirar supera su saldo actual";
        }
        if(Saldo<0){
            lsCadena="El saldo no puede ser menor a 0";
        }
        if(lsCadena!=""){
            return lsCadena;
        }else{
            this.SaldoActual=this.SaldoActual-Saldo;
            return "Retiro exitoso. Su saldo actual es de $"+this.SaldoActual
        } 
    }
    trasferencia(Saldo:number,Cuenta:string):string{
        var lsCadena:string="";
        if (Saldo>this.SaldoActual){
            lsCadena="El saldo que desea transferir supera su saldo actual";
        }
        if(Saldo<0){
            lsCadena="El saldo no puede ser menor a 0";
        }
        if(lsCadena!=""){
            return lsCadena;
        }else{
            this.SaldoActual=this.SaldoActual-Saldo;
            return "Transferencia exitosa. a la cuenta "+Cuenta+" Su saldo actual es de $"+this.SaldoActual
        } 
    }
    getSaldoActual():number{
        return this.SaldoActual;
    }
    tiempoAire(Saldo:number,NumeroTel:string):string{
        var lsCadena:string="";
        if (Saldo>this.SaldoActual){
            lsCadena="El saldo que desea cargar supera su saldo actual en su cuenta";
        }
        if(Saldo<0){
            lsCadena="El saldo no puede ser menor a 0";
        }
        if(lsCadena!=""){
            return lsCadena;
        }else{
            this.SaldoActual=this.SaldoActual-Saldo;
            return "Recarga exitosa al numero "+NumeroTel
        } 
    }
    /**
     * Fucnion permite pagar servios.
     * @param Saldo Es el monto que se desea pagar del servicio dado.(Numerico)
     * @param Cuenta Numero de cuenta a la que se le hara el pago.
     * @param Servico Compañia o servicio a la que se desea pagar.(AT&t  o CFE)
     */
    pagoServico(Saldo:number,Cuenta:string,Servico:string):string{
        var lsCadena:string="";
        if (Saldo>this.SaldoActual){
            lsCadena="El saldo que desea cargar supera su saldo actual en su cuenta";
        }
        if(Saldo<0){
            lsCadena="El saldo no puede ser menor a 0";
        }
        if (Servico!="AT&t"){
            lsCadena="Servico invalido!"
        }
        if (Servico!="CFE"){
            lsCadena="Servico invalido!"
        }
        if(lsCadena!=""){
            return lsCadena;
        }else{
            this.SaldoActual=this.SaldoActual-Saldo;
            return "Pago de servicio exitoso al numero de cuenta"+Cuenta
        } 
    }
}
