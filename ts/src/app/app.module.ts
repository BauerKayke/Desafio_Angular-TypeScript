import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AsideComponent } from './components/aside/aside.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { TitleVideoComponent } from './components/main-content/title-video/title-video.component';
import { DetailsInfoComponent } from './components/main-content/details-info/details-info.component';
import { SummarySectionComponent } from './components/main-content/summary-section/summary-section.component';
import { DiscussionSectionComponent } from './components/main-content/discussion-section/discussion-section.component';
import { FooterComponent } from './components/footer/footer.component';
import { AnsweredTopicComponent } from './components/main-content/discussion-section/answered-topic/answered-topic.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    MainContentComponent,
    TitleVideoComponent,
    DetailsInfoComponent,
    SummarySectionComponent,
    DiscussionSectionComponent,
    FooterComponent,
    AnsweredTopicComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
