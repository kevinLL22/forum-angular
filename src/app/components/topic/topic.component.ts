import {Component, OnInit} from '@angular/core';
import {TopicService} from "../../service/topic.service";
import {Topic} from "../../interface/topic";
import {PostTopic} from "../../interface/topic/post-topic";
import {PageableTopic} from "../../interface/topic/pageable-topic";
import {PutTopic} from "../../interface/topic/put-topic";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit{
  topic!: Topic;
  topicsArray!: Topic[];
  postTopic: PostTopic={
    'id_user' : 0,
    'id_course' : 0,
    'title' : '',
    'message' : ''
  };
  topicId!: number;
  editTopic: PutTopic={
    'id' : 0,
    'title' : '',
    'message' : ''
  };
  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
  }


  GetTopic(id:number):void{
    this.topicService.getTopic(id).subscribe(
      (response: Topic)=>{
        this.topic=response;
      });
  }

  GetAllTopics():void{
    this.topicService.getAllTopics().subscribe(
      (response: PageableTopic)=>{
        this.topicsArray=response.content
        console.log(response);
      });
  }

  PostTopic(){
    this.topicService.PostTopic(this.postTopic).subscribe(
      (response: Topic) => {
        this.topic=response;
      });
  }

  PutTopic(){
    this.editTopic.id=this.topic.id;
    this.topicService.PutTopic(this.editTopic).subscribe(
      (response: Topic) => {
        this.topic=response;
      });
  }



}
