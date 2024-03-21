class CuentaBancaria {
    constructor(numeroCuenta, saldoInicial = 0) {
      this.numeroCuenta = numeroCuenta;
      this.saldo = saldoInicial;
    }
    depositar(cantidad) {
      if (cantidad > 0) {
        this.saldo += cantidad;
        console.log(`Se depositaron $${cantidad} en la cuenta.`);
      } else {
        console.log("La cantidad a depositar debe ser mayor que cero.");
      }
    }
    retirar(cantidad) {
      if (cantidad > 0 && cantidad <= this.saldo) {
        this.saldo -= cantidad;
        console.log(`Se retiraron $${cantidad} de la cuenta.`);
      } else {
        console.log("La cantidad a retirar debe ser mayor que cero y no puede exceder el saldo disponible.");
      }
    }
    obtenerSaldo() {
      console.log(`El saldo actual de la cuenta ${this.numeroCuenta} es $${this.saldo}.`);
    }
  }
  
  const cuenta1 = new CuentaBancaria("1234567890", 1000);
  
  cuenta1.obtenerSaldo();
  
  cuenta1.depositar(500);
  cuenta1.retirar(200);
  cuenta1.retirar(1500);   
  
  cuenta1.obtenerSaldo();
  



