import {Component, OnInit} from '@angular/core';
import {TopicService} from "../../service/topic.service";
import {Topic} from "../../interface/topic";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit{
  topic!: Topic;
  constructor(private topicService: TopicService) {}

  ngOnInit(): void {
    this.OnGetTopic();
  }


  OnGetTopic():void{
    this.topicService.getTopic().subscribe(
      (response: Topic)=>{
        this.topic=response;
      });
  }

}
