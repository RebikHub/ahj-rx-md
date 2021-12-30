import { map, scan, pluck } from 'rxjs/operators';
import {
  fromEvent, share, startWith, Subject,
} from 'rxjs';

const Actions = {
  Increment: 'INCREMENT',
  Decrement: 'DECREMENT',
  Reset: 'RESET',
};

const sample = {
  type: 'INCREMENT',
  payload: 5,
};

// Reducer

function reduce(state, action) {
  switch (action.type) {
    case Actions.Increment:
      return { ...state, counter: state.counter + action.payload };
    case Actions.Decrement:
      return { ...state, counter: state.counter - action.payload };
    case Actions.Reset:
      return { ...state, counter: 0 };
    default:
      return state;
  }
}

class Store {
  constructor() {
    this.actions$ = new Subject();
    this.state$ = this.actions$.asObservable().pipe(
      startWith({ type: '__INITIALIZATION__' }),
      scan((state, action) => reduce(state, action), { counter: 0 }),
      share(),
    );
  }
}

const store = new Store();

store.state$.pipe(
  pluck('counter'),
  distinctUntilChanged(),
).subscribe((value) => {
  document.getElementById('counterValue').text = value;
});

const step$ = fromEvent(document.getElementById('stepInput'), 'input').pipe(
  map((e) => Number(e.target.value) || null),
  startWith(null),
);

fromEvent(document.getElementById('incBtn'), 'click').pipe(
  withLatestFrom(step$),
).subscribe(([event, step]) => store.inc(step));

fromEvent(document.getElementById('decBtn'), 'click').pipe(
  withLatestFrom(step$),
).subscribe(([event, step]) => store.dec(step));

fromEvent(document.getElementById('resetBtn'), 'click').subscribe(
  ([event, step]) => store.reset(),
);
