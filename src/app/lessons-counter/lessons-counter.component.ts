import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs/Observer';

import { Lesson } from '../shared/model/lesson';
import { store } from '../events-bus-experiments/app-data';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements Observer<Lesson[]>, OnInit {

  lessonsCounter = 0;

  ngOnInit() {
    store.lessonsList$.subscribe(this);
  }

  next(data: Lesson[]) {
    this.lessonsCounter = data.length;
  }

  error(err: any) {
    console.log(err);
  }

  complete() {
    console.log('Completed');
  }
}
