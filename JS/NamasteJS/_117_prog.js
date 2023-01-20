const user = {
    fname: 'Vaishnav',
    lname: 'Pureddiwar',
    set fullname(value) {
        [this.fname, this.lname] = value.split(' ');
    },
    get fullname() {
        return `${this.fname} ${this.lname}`;
    }
}

const admin = {
    admin: true,
    __proto__: user
};

// console.log(admin.fullname);

// assignmend to a setter works same as an function invocation and context of this is passed as an admin
admin.fullname = 'Rahul Shinde';

// consoling it
console.log('Admin: ', admin.fullname);
console.log('User: ', user.fullname);