import {question,questionInt} from "readline-sync";
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


var Opcion:number
var Monto:number;
var SaldoActual:number=1000;
var Cuenta:string;
var Compania:string;
var caja=new CajeroAutomatico(SaldoActual)
var Opcion:number;
do{
console.clear()
Opcion=questionInt("----Cajero automatico--- \n\n1.- Retiro\n2.- Consulta\n3.- Servicios(Pago)\n4.- Tiempo Aire\n5.- Transferencia\n\n0.-Salir\nOpcion: ")
var lsResultado:string
    switch(Opcion){
        case 1:{
            Monto=questionInt("Ingresa el monto que deseas retirar: \n")
            lsResultado=caja.retiro(Monto)
            break;
        }
        case 2:{
            lsResultado="Saldo Actual $"+caja.getSaldoActual()
            break;
        }
        case 3:{
            Monto=questionInt("Ingresa el monto a pagar: \n")
            Cuenta=question("Ingresa numero de cuenta: \n")
            Compania=question("Ingresa Compania (AT&t o CFE): \n")
            lsResultado=caja.pagoServico(Monto,Cuenta,Compania)
            break;
        }
        case 4:{
            Monto=questionInt("Ingresa el monto de recarga: \n")
            Cuenta=question("Ingresa numero telefonico: \n")
            lsResultado=caja.tiempoAire(Monto,Cuenta)
            break;
        }
        case 5:{
            Monto=questionInt("Ingresa el monto a trasferir: \n")
            Cuenta=question("Ingresa cuenta beneficiaria: \n")
            lsResultado=caja.trasferencia(Monto,Cuenta)
            break;
        }
    }
    console.log(lsResultado+"\n")
    var yesNo=question("Desea realizar otra operacion: s/n: ")
    if(yesNo!="s"){
        Opcion=0;
    }
}while(Opcion!=0)
