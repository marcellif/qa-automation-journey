function runTest(testAction, testName){
      testAction(testName);
}

const loginTest = (name) =>{
    console.log(`Running ${name}`);
}

const paymentTest = (name) =>{
    console.log(`Running ${name}`);
}

runTest(loginTest, "Login test");
runTest(paymentTest, "Payment test");


const users = [
    { name: "Cassandra", role: "admin" },
    { name: "Olavo", role: "customer" },
    { name: "Danilo", role: "admin" }
];


users.forEach((user) =>{
    console.log( `${user.name} - ${user.role}`);
})




