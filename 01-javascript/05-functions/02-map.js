// MAP — Transforming an array into a new array

const users = [
    { name: "Cassandra", role: "admin", active: true },
    { name: "Olavo", role: "customer", active: false },
    { name: "Danilo", role: "admin", active: true }
];


const userRoles = users.map((user) => {
    return user.role;
})

console.log(userRoles);

const testUsers = users.map((user)=>{
    return {
        username: user.name,
        isAdmin: user.role === "admin"
    }
})

console.log(testUsers);

const accessData = users.map((user)=>{
    return {
        username: user.name,
        canAccess: user.role === "admin" && user.active
    }
});


console.log(accessData);