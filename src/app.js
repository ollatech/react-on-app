import component from './component';
import store from './store';
import server from './server';
import broswer from './broswer';
import createElement from './createElement';
const ctx = () => {
  return ((typeof window !== 'undefined') && window) || ((typeof global !== 'undefined') && global) || this;
};
ctx.ReactOnApp = {
	component() {
		return component;
	},
	store() {
		return store;
	},
	render(domId, name, props, contexts, serverSide) {
		const componentObj = component.get(name);
		const componentResult = createElement({componentObj, props});
		if(serverSide) {
			return server.render(componentResult);
		}
		return broswer.render(componentResult, domId);
	}
};
export default ctx.ReactOnApp;
