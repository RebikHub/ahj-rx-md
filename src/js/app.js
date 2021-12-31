import Dashboard from './dashboard';
import Store from './store';
import projects from './projects';

console.log('app started');

const dash = new Dashboard();
const store = new Store(projects);

store.event();
dash.init(store.state);
