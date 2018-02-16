import context from './context';
import component from './component';
import server from './server';
import broswer from './broswer';
import createElement from './createElement';

const ctx = context();

ctx.ReactOnApp = {
	register(args) {
		return component.register(args);
	},
	render(options, serverSide = false) {
		const { name, domNodeId, props, railsContext } = options;
		const componentObj = component.get(name);
		if(!componentObj) {
			console.log('component not found', name);
		}
		const componentResult = createElement({
			componentObj,
			props,
			railsContext
		});
		if(serverSide) {
			return server.render(componentResult)
		}
		return broswer.render(componentResult, domNodeId)
	}
};

export default ctx.ReactOnApp;
