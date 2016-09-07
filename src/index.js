import escape from 'escape-regexp';

// proto trickery
class TRegExp extends RegExp {
	constructor () {
		super(...arguments);

		// convenience getters
		this.__proto__.__defineGetter__('_', () => {
			return this.flags ? new TRegExp(this.source) : this;
		}, {enumerable: false, writable: false});

		// flags
		['g', 'i', 'm', 'u', 'y'].forEach(flag => {
			this.__proto__.__defineGetter__(flag, () => {
				return this.flags.indexOf(flag) === -1 ? new TRegExp(this.source, this.flags + flag) : this;
			});
		}, {
			enumerable: false,
			writable: false
		});
	}
}

function regexp (pieces) {
	pieces = pieces.raw;

    let result = pieces[0],
    	substitutions = [].slice.call(arguments, 1);

    for (let i = 0; i < substitutions.length; ++i) {
        result += escape(substitutions[i]) + pieces[i + 1];
    }

    return new TRegExp(result);
}

export default regexp;