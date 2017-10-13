import { Component, OnInit } from '@angular/core';
import { testLessons } from '../shared/model/test-lessons';
import { Lesson } from '../shared/model/lesson';
import { store } from './app-data';

@Component({
  selector: 'events-bus-experiments',
  templateUrl: './events-bus-experiments.component.html',
  styleUrls: ['./events-bus-experiments.component.css']
})
export class EventsBusExperimentsComponent implements OnInit {
  ngOnInit() {
    store.initializeLessonsList(testLessons.slice(0));

    setTimeout(() => {
      const newLesson = {
        id: Math.random(),
        description: 'New lesson ariving from the backend'
      };

      store.addLesson(newLesson);

    }, 3000);
  }

  addLesson(lessonText: string) {
    const newLesson = {
      id: Math.random(),
      description: lessonText
    };

    store.addLesson(newLesson);
  }

}
