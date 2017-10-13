import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observer } from 'rxjs/Observer';
import { Observable } from 'rxjs/Observable';

import * as _ from 'lodash';

import { Lesson } from '../shared/model/lesson';

class DataStore {
  private lessonsListSubject = new BehaviorSubject([]);

  public lessonsList$: Observable<Lesson[]> = this.lessonsListSubject.asObservable();

  initializeLessonsList(newList: Lesson[]) {
    this.lessonsListSubject.next(_.cloneDeep(newList));
  }

  addLesson(newLesson: Lesson) {
    const lessons = this.cloneLessons();

    lessons.push(_.cloneDeep(newLesson));
    this.lessonsListSubject.next(lessons);
  }

  deleteLesson(deleted: Lesson) {
    const lessons = this.cloneLessons();

    _.remove(lessons,
      lesson => lesson.id === deleted.id);
    this.lessonsListSubject.next(lessons);
  }

  toggleLessonViewed(toggled: Lesson) {
    const lessons = this.cloneLessons();
    const lesson = _.find(lessons,
      les => les.id === toggled.id);

    lesson.completed = !lesson.completed;
    this.lessonsListSubject.next(lessons);
  }

  private cloneLessons() {
    return _.cloneDeep(this.lessonsListSubject.getValue());
  }
}

export const store = new DataStore();
