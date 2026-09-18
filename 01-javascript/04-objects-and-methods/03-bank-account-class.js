class ContaBancaria{
    constructor(titular, saldo, status){
        this.titular = titular;
        this.saldo = saldo;
        this.status = status;
    }

    deposit(valorRecebido){
       this.saldo =  this.saldo + valorRecebido
        return  `O valor ${valorRecebido} foi depositado e o valor atual é ${this.saldo}`;
    }

    withdraw(valor){
         if (this.status !== "ativa"){
          return `${this.titular}, a conta está com status ${this.status}, o saldo de ${this.saldo} não poderá ser sacado, consulte uma agência!`;
         }else if(valor > this.saldo){
          return `Não há saldo suficiente para ser sacado, ${this.titular}`;
         }else{
            this.saldo -= valor;
            return `O valor de ${valor} foi descontado e resta ${this.saldo} na conta, ${this.titular}`;
         }
        }  
}

const conta1 = new ContaBancaria ("Danilo", 200, "ativa");

console.log(conta1.withdraw(200));
console.log(conta1.withdraw(1));

console.log(conta1.deposit(300));
console.log(conta1.withdraw(1));

const conta2 = new ContaBancaria ("Dante", 100, "inativa");
console.log(conta2.withdraw(100));
