import ReactOnApp from './app';

export class Container {
	constructor() {
		this.app = ReactOnApp;
	}
	store(data) {

	}
	history() {

	}
	component(args) {
		return this.app.component().set($args);
	}
}