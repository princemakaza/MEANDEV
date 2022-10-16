import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from './services/user';
import { UserService } from './services/user.service';

@Component({  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor (public userService: UserService){
    this.getUsers()
  }
  getUsers(){
    this.userService.getUser().subscribe((res)=>{
      this.userService.users = res as User[]
    }) 
  }
postUser(form: NgForm){
  if(form.value._id){
    this.userService.postUser(form.value).subscribe((res)=>{
      this.getUsers()
      this.userService.selectedUser = new User()
    })
  }
  else{
    this.userService.putUser(form.value).subscribe((res)=>{
      this.getUsers()
      this.userService.selectedUser = new User()
    })

  }
}
editUser(user:User){
  this.userService.selectedUser = user
}

 
deleteUser(_id: string){
  this.userService.deleteUser(_id).subscribe((res)=>{
    this.getUsers()
    this.userService.selectedUser = new User()
  })
}

}
