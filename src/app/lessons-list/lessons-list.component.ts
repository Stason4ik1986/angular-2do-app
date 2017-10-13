import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
import { store, Observer } from '../events-bus-experiments/app-data';
import * as _ from 'lodash';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer, OnInit {
  lessons: Lesson[] = [];

  constructor() { }

  ngOnInit() {
    store.subscribe(this);
  }

  next(data: Lesson[]) {
    this.lessons = data.slice(0);
  }

  deleteLesson(deleted: Lesson) {
    store.deleteLesson(deleted);
  }

  toggleLessonViewed(lesson: Lesson) {
    store.toggleLessonViewed(lesson);
  }
}



