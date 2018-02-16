import ReactDOM from 'react-dom/server';
export default {
	render(component) {
		return ReactDOMServer.renderToString(component);
	}
}
