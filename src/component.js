const components = new Map();
export default  {
	set(args) {
		Object.keys(args).forEach(name => {
			if (components.has(name)) {
				console.warn('Called register for component that is already registered', name);
			}
			const component = args[name];
			if (!component) {
				throw new Error(`Called register with null component named ${name}`);
			}
			components.set(name, component);
		});
	},
	add(name, component) {
		if (components.has(name)) {
			console.warn('Called register for component that is already registered', name);
		}
		if (!component) {
			throw new Error(`Called register with null component named ${name}`);
		}
		components.set(name, component);
	},
	get(name) {
		if (components.has(name)) {
			return components.get(name);
		}
		throw new Error(`Could not find component registered with name ${name}`);
	},
	all() {
		return components;
	}
};

