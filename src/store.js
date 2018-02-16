const stores = new Map();
export default  {
	set(args) {
		Object.keys(args).forEach(name => {
			if (stores.has(name)) {
				console.warn('Called register for store that is already registered', name);
			}
			const store = args[name];
			if (!store) {
				throw new Error(`Called register with null store named ${name}`);
			}
			stores.set(name, store);
		});
	},
	add(name, store) {
		if (stores.has(name)) {
			console.warn('Called register for store that is already registered', name);
		}
		if (!store) {
			throw new Error(`Called register with null store named ${name}`);
		}
		stores.set(name, store);
	},
	get(name) {
		if (stores.has(name)) {
			return stores.get(name);
		}
		throw new Error(`Could not find store registered with name ${name}`);
	},
	all() {
		return stores;
	}
};

