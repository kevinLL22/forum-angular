import {Component, OnInit} from '@angular/core';
import {UserService} from "./service/user.service";
import {User} from "./interface/user";
import {AuthService} from "./service/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'forum-front';
  private user:User={
    'email':'kevin@gmail.com',
    'password':'123456'
}
  constructor(private userService: UserService, private authService: AuthService) {}

  ngOnInit(): void {
    this.onPostAuth();
  }

  onPostAuth(){
    this.authService.login(this.user).subscribe(
      (response: any)=>{
        this.authService.setToken(response.JWTtoken)
      }
    );
  }
  /*
  onGetUsers(): void {
    this.userService.getUsers().subscribe(
      (response) => console.table(response),
      (error: any) => console.log(error),
      () => console.log('Done getting users'),

    );
  }

  onCreateUser(): void {
    this.userService.createUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done creating user'),

    );
  }

  onUpdateUser(): void {
    this.userService.updateUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done creating user'),

    );
  }

   */

  OnPostUser():void{
    this.userService.postUser(this.user).subscribe(
      (response) => console.log(response)
    );
  }



}

