import { Component } from '@angular/core';

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

  responseCreate(event: Event) {
    event.preventDefault();
    this.response = !this.response;
    this.topicCreated = !this.topicCreated;
    this.answeredTopics.push({
      key: this.topicCreatedKey,
      subject: this.subjectValue || 'Default subject',
      content: this.contentValue || 'Default content',
      likes: 0,
      isNew: true,
    });
    this.topicCreatedKey++;
  }

  submitTopic(e: Event) {
    e.preventDefault();
    if (!this.isNew) {
      this.editTopic(this.key, this.subjectValue, this.contentValue);
    } else {
      this.responseCreate(e);
    }
  }

  editTopic(key: number, subject: string, content: string) {
    const topicIndex = this.answeredTopics.findIndex(
      (topic) => topic.key === key
    );
    if (topicIndex === key) {
      const editedTopic = this.answeredTopics[topicIndex];
      editedTopic.subject = subject;
      editedTopic.content = content;
      this.isNew = !this.isNew;
      this.subjectValue = '';
      this.contentValue = '';
    }
  }
}
