import { fromEvent, pluck } from 'rxjs';
import projects from './projects';

export default class Dashboard {
  constructor() {
    this.projectName = document.querySelector('.project-name');
    this.projectsList = document.querySelector('.projects');
    this.statsProject = document.querySelector('.stats-projects');
    this.tasksPorect = document.querySelector('.tasks-projects');
    this.currentProject = 'Frontend';
  }

  init() {
    this.renderStats(projects);
    this.renderTasks(projects);
  }

  choiceProjectClick() {
    fromEvent(document, 'click').pipe(
      pluck('target', 'value'),
    ).subscribe((c) => console.log(c));

    fromEvent(this.projectName, 'click').subscribe(() => {
      if (this.projectsList.classList.contains('none')) {
        this.projectsList.classList.remove('none');
      }
    });
  }

  renderStats(projects, name) {
    // projects.forEach((elem) => {
    //   if (this.currentProject === elem.name) {
    //     elem.tasks.forEach((el) => {

    //     });
    //   }
    // });
    const baseDiv = document.createElement('div');
    const nameDiv = document.createElement('div');
    const openDiv = document.createElement('div');
    baseDiv.className = 'stats-count';
    nameDiv.className = 'count-name';
    openDiv.className = 'count-status';
    baseDiv.append(nameDiv);
    baseDiv.append(openDiv);
    this.statsProject.append(baseDiv);
  }

  renderTasks(projects, name) {
    projects.forEach((elem) => {
      if (this.currentProject === elem.name) {
        elem.tasks.forEach((el) => {
          const baseDiv = document.createElement('div');
          const checkDiv = document.createElement('div');
          const taskDiv = document.createElement('div');
          baseDiv.className = 'tasks-project-status';
          checkDiv.className = 'task-status';
          taskDiv.className = 'task-name';
          this.tasksProject.appendChild(baseDiv);
          if (el.done) {
            checkDiv.classList.add('check');
          }
          taskDiv.textContent = el.name;
        });
      }
    });
  }
}
