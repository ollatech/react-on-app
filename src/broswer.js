import ReactDOM from 'react-dom';
export default {
	render(component, domNode) {
		ReactDOM.render(component, document.getElementById(domNode));
	}
}