import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsweredTopicComponent } from './answered-topic.component';

describe('AnsweredTopicComponent', () => {
  let component: AnsweredTopicComponent;
  let fixture: ComponentFixture<AnsweredTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnsweredTopicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnsweredTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
