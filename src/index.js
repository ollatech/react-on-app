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
	/**
	 * [render description]
	 * @param  {String}  domId      [description]
	 * @param  {String}  component  [description]
	 * @param  {Object}  props      [description]
	 * @param  {Object}  appContext [description]
	 * @param  {Boolean} serverSide [description]
	 * @return {[type]}             [description]
	 */
	render(domId, name, props = {}, appContext = {}, serverSide = false) {
		const componentObj = component.get(name);
		if(!componentObj) {
			console.log('component not found', name);
		}
		const componentResult = createElement({
			componentObj,
			props,
			appContext
		});
		if(serverSide) {
			return server.render(componentResult)
		}
		return broswer.render(componentResult, domId)
	}
};

export default ctx.ReactOnApp;
