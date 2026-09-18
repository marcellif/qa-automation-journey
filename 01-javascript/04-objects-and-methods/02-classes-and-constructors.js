class User{
    constructor(name, role, active){
        this.name = name;
        this.role = role;
        this.active = active;
    }

    isAdmin(){
        return this.role ==="admin";
    }

    canAccessSystem(){
        return this.role ==="admin" && this.active ==="Active";
    }

    getUserStatus(){
        return `${this.active} ${this.role}`;
    }

}

const user1 = new User("cassandra","admin","Active")

const user2 = new User("Olavo","customer","Inactive")

console.log(user1.isAdmin())
console.log(user1.canAccessSystem())

console.log(user2.isAdmin())
console.log(user2.canAccessSystem())
console.log(user2.getUserStatus())

