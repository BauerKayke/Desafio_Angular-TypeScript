import { Component } from '@angular/core';
import { event } from 'cypress/types/jquery';

@Component({
  selector: 'app-discussion-section',
  templateUrl: './discussion-section.component.html',
  styleUrls: ['./discussion-section.component.scss'],
})
export class DiscussionSectionComponent {
  createTopicView: boolean = false;
  topicCreated: boolean = false;
  response: boolean = false;
  aux: number = 0;
  numberOfLikes: number = 0;
  topicCreatedKey: number = 0;
  answeredTopics: {
    key: number;
    subject: string;
    content: string;
    likes: number;
    isNew: boolean;
  }[] = [];
  subjectValue: string = '';
  contentValue: string = '';
  isNew: boolean = true;
  key: number = 0;
  topic: any = null;
  constructor() {}

  goCreateTopic() {
    if (this.aux === 0) {
      this.createTopicView = true;
      this.topicCreated = true;
      this.aux++;
    } else {
      this.topicCreated = !this.topicCreated;
      this.response = !this.response;
    }
  }

  responseCreate(event: Event, subject: string, content: string) {
    event.preventDefault();
    this.response = !this.response;
    this.topicCreated = !this.topicCreated;
    this.answeredTopics.push({
      key: this.topicCreatedKey,
      subject: subject || 'Default subject',
      content: content || 'Default content',
      likes: 0,
      isNew: true,
    });
    this.topicCreatedKey++;
  }
  submit(e: Event, subject: string, content: string) {
    console.log(this.isNew);
    if (!this.isNew) {
      this.responseCreate(e, subject, content);
    } else {
      this.editTopic(this.key);
    }
  }
  editTopic(key: number) {
    const topicIndex = this.answeredTopics.findIndex(
      (topic) => topic.key === key
    );
    if (topicIndex !== -1) {
      const editedTopic = this.answeredTopics[topicIndex];
      this.subjectValue = editedTopic.subject;
      this.contentValue = editedTopic.content;
      this.key = editedTopic.key;
      this.isNew = false;
    }
  }

  submitEditTopic() {
    const topicIndex = this.answeredTopics.findIndex(
      (topic) => topic.key === this.key
    );
    if (topicIndex !== -1) {
      this.answeredTopics[topicIndex].subject = this.subjectValue;
      this.answeredTopics[topicIndex].content = this.contentValue;
      this.isNew = true;
    }
  }
}
