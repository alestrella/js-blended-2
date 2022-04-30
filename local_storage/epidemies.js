class Epidemy {
	#deseases;
	constructor(deseases) {
		this.#deseases = deseases;
	}

	showEpidemies() {
		for (const desease of this.#deseases) {
			console.log(`name: ${desease.name}, link: ${desease.href}`);
		}
	}

	addEpidemy(newEpidemy) {
		this.#deseases = [...this.#deseases, newEpidemy];
	}

	updateEpidemy(name, newName) {
		for (const desease of this.#deseases) {
			if (desease.name === name) {
				desease.name = newName;
			} else {
				console.log(`desease ${name} not found`);
			}
		}
	}

	removeEpidemy(name) {
		for (const desease of this.#deseases) {
			if (desease.name === name) {
				const index = this.#deseases.indexOf(name);
				this.#deseases.splice(index, 1);
			}
		}
	}
}
