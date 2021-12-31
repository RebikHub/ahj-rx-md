import {
  map, scan, pluck, distinctUntilChanged, withLatestFrom,
} from 'rxjs/operators';
import {
  fromEvent, share, startWith, Subject,
} from 'rxjs';

export default class Store {
  constructor(state) {
    this.state = state;
    this.state$ = new Subject();
    this.actions = {
      inc: 'inc',
      dec: 'dev',
    };
  }

  static reducer(state, action) {
    switch (action.type) {
      case action.inc:
        return { counter: state.counter + action.payload };
      case action.dec:
        return { counter: state.counter - action.payload };
      default:
        return state;
    }
  }

  inc() {
    this.state = Store.reducer(this.state, { type: this.actions.inc, payload: 1 });
    console.log(this.state);
    this.state$.next(this.state);
  }

  dec() {
    this.state = Store.reducer(this.state, { type: this.actions.dec, payload: 1 });
    console.log(this.state);
    this.state$.next(this.state);
  }

  event() {
    // fromEvent()

    this.state$.subscribe();
  }
}
