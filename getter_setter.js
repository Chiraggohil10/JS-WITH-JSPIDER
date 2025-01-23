class user {
    constructor(firstName,lastName,age,email,password){ 
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.email=email;
        this.password=password;
    }


    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
       this._email=value
    }
    get password(){
        return `Lol@123${this._password}@123`;
    }

    set password(value){
       this._password=value
    }
}

const user1=new user("Chirag","Gohil",22,"gohilchirag90994@email.com","Admin@123");
console.log(user1.password);
console.log(user1.email);