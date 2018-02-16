const components = new Map();
export default  {
	register(args) {
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
	get(name) {
		if (components.has(name)) {
			return components.get(name);
		}
		const keys = Array.from(components.keys()).join(', ');
		throw new Error(`Could not find component registered with name ${name}`);
	},
	components() {
		return components;
	}
};

