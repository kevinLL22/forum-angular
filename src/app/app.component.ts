import {Component, OnInit} from '@angular/core';
import {UserService} from "./service/user.service";
import {TopicService} from "./service/topic.service";
import {User} from "./interface/user";

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
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    //this.OnGetTopic();
    //this.OnPostUser()
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


  //topic
  //user foro
  OnPostUser():void{
    this.userService.postUser(this.user).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done creating user'),
    );
  }



}

