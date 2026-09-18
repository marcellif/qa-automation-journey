class ContaBancaria{
    constructor(titular, saldo, status){
        this.titular = titular;
        this.saldo = saldo;
        this.status = status;
    }

    deposit(valorRecebido){
       this.saldo =  this.saldo + valorRecebido
        return  `O valor atual é ${this.saldo}`;
    }

    withdraw(){
      if (this.status === "ativa" && this.saldo > 0){
        return `${this.titular}, é possível sacar ${this.saldo}`;
      }else if(this.status === "inativa" && this.saldo > 0){
        return `${this.titular}, a conta está com status ${this.status}, o saldo de ${this.saldo} não poderá ser sacado, consulte uma agência!`;
      }
      else{
        return `Não há saldo sificiente para ser sacado, ${this.titular}`;
      }
    }
}

const conta1 = new ContaBancaria ("Danilo", 200, "ativa");

console.log(conta1.withdraw())

console.log(conta1.deposit(300))
console.log(conta1.withdraw())

const conta2 = new ContaBancaria ("Dante", 100, "inativa");
console.log(conta2.withdraw())