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
	render(domId, name, props, appContext, serverSide ) {
		const componentObj = component.get(name);
		const componentResult = createElement({componentObj, props});
		if(serverSide) {
			return server.render(componentResult);
		}
		return broswer.render(componentResult, domId);
	}
};

export default ctx.ReactOnApp;
