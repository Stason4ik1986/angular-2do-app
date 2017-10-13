import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs/Observer';

import * as _ from 'lodash';

import { Lesson } from '../shared/model/lesson';
import { store } from '../events-bus-experiments/app-data';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements Observer<Lesson[]>, OnInit {
  lessons: Lesson[] = [];

  ngOnInit() {
    store.lessonsList$.subscribe(this);
  }

  next(data: Lesson[]) {
    this.lessons = data;
  }

  error(err: any) {
    console.log(err);
  }

  complete() {
    console.log('Completed');
  }

  deleteLesson(deleted: Lesson) {
    store.deleteLesson(deleted);
  }

  toggleLessonViewed(lesson: Lesson) {
    store.toggleLessonViewed(lesson);
  }
}



