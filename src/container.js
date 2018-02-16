import ReactOnApp from './app';

export default class Container {
	constructor() {
		this.app = ReactOnApp;
	}
	app() {
		return this.app;
	}
	store(data) {

	}
	history() {

	}
	component(args) {
		return this.app.component().set(args);
	}
}