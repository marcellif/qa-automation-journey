const user = {
    name: "joão",
    role: "admin",
    active: true,
    canAccessSystem: function (){
        return this.active && this.role ==="admin";
    }
};

console.log(user.canAccessSystem())