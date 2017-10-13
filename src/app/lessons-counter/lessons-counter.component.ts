import { Component, OnInit } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
import { store, Observer } from '../events-bus-experiments/app-data';

@Component({
  selector: 'lessons-counter',
  templateUrl: './lessons-counter.component.html',
  styleUrls: ['./lessons-counter.component.css']
})
export class LessonsCounterComponent implements Observer, OnInit {
  lessonsCounter = 0;

  ngOnInit() {
    store.subscribe(this);
  }

  next(data: Lesson[]) {
    this.lessonsCounter = data.length;
  }

}
