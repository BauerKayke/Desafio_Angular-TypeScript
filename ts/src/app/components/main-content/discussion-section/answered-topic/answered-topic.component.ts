import {
  Component,
  Input,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-answered-topic',
  templateUrl: './answered-topic.component.html',
  styleUrls: ['./answered-topic.component.scss'],
})
export class AnsweredTopicComponent implements AfterViewInit {
  @Input() additionalClass: string = 'newTopic';
  @Input() likesCount: number = 0;
  @Input() key: number = 0;
  @Input() subject: string = '';
  @Input() content: string = '';
  @Input() isNew: boolean = false;
  showComments = false;
  numberOfResponses: number = 0;
  @Output() edit = new EventEmitter<number>();
  @Output() editTopicClicked: EventEmitter<number> = new EventEmitter<number>();
  @ViewChild('commentsContainer', { static: false })
  commentsContainer!: ElementRef;

  constructor(private cd: ChangeDetectorRef) {}
  ngOnInit() {
    this.isNew = !this.isNew;
  }
  ngAfterViewInit() {
    this.numberOfResponses = this.getNumberOfResponses();
    this.cd.detectChanges();
  }
  incrementLikes() {
    this.likesCount++;
  }

  toggleComments() {
    this.showComments = !this.showComments;
  }

  editTopic() {
    this.editTopicClicked.emit(this.key);
  }

  private getNumberOfResponses(): number {
    const nativeElement = this.commentsContainer?.nativeElement;
    if (nativeElement) {
      const commentsContainers = nativeElement.querySelectorAll(
        '.comments-container'
      );
      return commentsContainers.length;
    }
    return 0;
  }
}
