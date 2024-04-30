import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionSectionComponent } from './discussion-section.component';

describe('DiscussionSectionComponent', () => {
  let component: DiscussionSectionComponent;
  let fixture: ComponentFixture<DiscussionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscussionSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscussionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
