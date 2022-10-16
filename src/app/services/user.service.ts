import { Injectable } from '@angular/core';
import { User } from './user';
import{HttpClient} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser:User
  users!: User[];  

  constructor(private http: HttpClient) {
    this.selectedUser = new User()
   }
   getUser(){
    return this.http.get(`http://localhost:4071/`)
   }
   postUser(user:User){
    return this.http.post(`http://localhost:4071/`, user)
   } 

   putUser(user:User){
    return this.http.put(`http://localhost:4071/${user._id}`, user)
   }   
   deleteUser(_id:string){
    return this.http.delete(`http://localhost:4071/${_id}`)
   }   
}
