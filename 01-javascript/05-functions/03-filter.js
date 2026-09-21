const users = [
    { name: "Cassandra", role: "admin", active: true },
    { name: "Olavo", role: "customer", active: false },
    { name: "Danilo", role: "admin", active: true },
    { name: "Rodrigo", role: "admin", active: true },
    { name: "Helena", role: "customer", active: true },
];


const activeAdmins = users.filter((user) => user.role === "admin" && user.active);


console.log(activeAdmins);