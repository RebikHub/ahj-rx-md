import { fromEvent, pluck } from "rxjs";

export default class Dashboard {
  constructor() {
    this.projectName = document.querySelector('.project-name');
    this.projectsList = document.querySelector('.projects');
  }

  choiceProjectClick() {
    fromEvent(document, 'click').pipe(
      pluck((e, r) => console.log(e, r)),
    ).subscribe();

    fromEvent(this.projectName, 'click').subscribe(() => {
      if (this.projectsList.classList.contains('none')) {
        this.projectsList.classList.remove('none');
      }
    });
  }
}
