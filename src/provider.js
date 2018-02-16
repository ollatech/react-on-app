import ReactOnApp from './app';
export class Provider {
	this.app = ReactOnApp;
	constructor(){
	}
	store(data) {

	}
	history() {

	}
	component(args) {
		return this.app.register($args);
	}
}