export class User {
    constructor(_id="", full_name ="", email="", password=""){
        this._id = _id;
        this.full_name = full_name;
        this.email = email;
        this.password= password;
    }
    _id:string;
    full_name: string;
    email:string;
    password:string
}
