import { fromEvent } from 'rxjs';
import { filter } from 'rxjs/operators';

export default class Dashboard {
  constructor() {
    this.projectName = document.querySelector('.project-name');
    this.projectsList = document.querySelector('.projects');
    this.statsProject = document.querySelector('.stats-projects');
    this.tasksProject = document.querySelector('.tasks-projects');
  }

  init(projects) {
    this.renderStats(projects);
    this.renderTasks(projects);
    this.changeProject();
  }

  changeProject() {
    fromEvent(this.projectName, 'click').pipe(
      filter((elem) => {
        console.log(elem);
      }),
    ).subscribe();
  }

  renderStats(projects) {
    projects.state.forEach((elem) => {
      let numDone = null;
      elem.tasks.forEach((item) => {
        if (!item.done) {
          numDone += 1;
        }
      });
      const baseDiv = document.createElement('div');
      const nameDiv = document.createElement('div');
      const openDiv = document.createElement('div');
      baseDiv.className = 'stats-count';
      nameDiv.className = 'count-name';
      openDiv.className = 'count-number';
      nameDiv.textContent = elem.name;
      openDiv.textContent = numDone;
      baseDiv.append(nameDiv, openDiv);
      baseDiv.append(openDiv);
      this.statsProject.append(baseDiv);
    });
  }

  renderTasks(projects) {
    projects.state.forEach((elem) => {
      if (projects.current === elem.name) {
        elem.tasks.forEach((el) => {
          const baseDiv = document.createElement('div');
          const checkDiv = document.createElement('div');
          const taskDiv = document.createElement('div');
          baseDiv.className = 'tasks-project-status';
          checkDiv.className = 'task-status';
          taskDiv.className = 'task-name';
          if (el.done) {
            checkDiv.classList.add('check');
          }
          taskDiv.textContent = el.name;
          baseDiv.append(checkDiv, taskDiv);
          this.tasksProject.append(baseDiv);
        });
      }
    });
  }

  static changeOpen(projects) {
    let numDone = null;
    const projectList = document.querySelectorAll('.count-name');
    projects.state.forEach((elem) => {
      if (elem.name === projects.current) {
        elem.tasks.forEach((item) => {
          if (!item.done) {
            numDone += 1;
          }
        });
      }
    });
    for (const i of projectList) {
      if (i.textContent === projects.current) {
        i.nextSibling.textContent = numDone;
      }
    }
  }
}
